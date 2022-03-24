import {createSlice,current,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts = createAsyncThunk("products/getAll",async(category)=>{
    return axios.get(`http://localhost:8000/${category}`).then((res)=>
      res.data
    )
})
export const getPages = createAsyncThunk("products/getPages",async(category)=>{
  return axios.get(`http://localhost:8000/${category}`).then((res)=>
    res.data
  )
})

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products: [],//id ,name,desc,price,image
        cart:[],//id ,name,desc,price,image,quantity
        currentItem: null,
        status:null,
        pageCount:null,
    },
    reducers:{
        addToCart:(state,action)=>{
            const item= state.products.find(({productID}) => productID ===action.payload.productID);
            const inCart = state.cart.length ?state.cart.find(({productID,selectedSize})=> productID===action.payload.productID && selectedSize ===action.payload.selectedSize)?true:false : false;
            return{
                ...state,
                cart:inCart? state.cart.map((item)=> 
                item.productID===action.payload.productID && item.selectedSize ===action.payload.selectedSize
                ?{...item,quantity:item.quantity+action.payload.quantity}
                :item
                )
                :[...state.cart,{...item,quantity:action.payload.quantity,selectedSize:action.payload.selectedSize}],
            }
        },
        removeFromCart:(state,action)=>{
          
          const filtered=state.cart.filter(({productID,selectedSize}) => productID===action.payload.productID && selectedSize ===action.payload.selectedSize);
          
          state.cart=state.cart.filter((item) => item!==filtered[0]);
        },
    },
    extraReducers:{
      [getProducts.pending]:(state,action)=>{
        state.status="pending";
      },
      [getProducts.fulfilled]:(state,action)=>{
        state.products=action.payload;
        state.status="success";
      },
      [getProducts.rejected]:(state,action)=>{
        state.status="failed";
      },
      
      [getPages.pending]:(state,action)=>{
        state.status="pending";
      },
      [getPages.fulfilled]:(state,action)=>{
        state.pageCount=Math.ceil(action.payload.length/12)
        state.status="success";
      },
      [getPages.rejected]:(state,action)=>{
        state.status="failed";
      }

    },
});

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer;