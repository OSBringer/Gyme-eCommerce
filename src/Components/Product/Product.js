import {React,useState,useEffect} from 'react'
import {Box,Skeleton ,Grid,Item,Typography,Button} from '@mui/material';
import {AddShoppingCart,Delete} from '@mui/icons-material';
import  {addToCart, removeFromCart} from '../../features/cart/cartSlice';
import { useDispatch,useSelector } from 'react-redux';

const Product = ({openDetail,product,cartScreen}) => {
  const fetchStatus=useSelector((state)=>state.cart.status)
  const [frameWidth,setFrameWidth]= useState('100%');
  //set frame of the picutre in  cart screen
  useEffect(() => {
    cartScreen ? setFrameWidth('15vw'):setFrameWidth("100%");
  }, [])
  const dispatch = useDispatch();
  return (
    <Box >
      { fetchStatus==="success" ?
    <Box 
    sx={{
      display:"flex",
      boxShadow:10,
      bgcolor:"background.secondary",
      flexDirection:"column",
      alignItems:"center",
      maxWidth:"800px",
      width:frameWidth,
      borderBottom:1,
      borderLeft:1,
      borderRight:1,
      cursor:"pointer"
      }}>
      <a onClick={()=>openDetail(product)}>
        <img style={{ width:"100%",maxWidth:"inherit",height:"auto"}} src={product.image} />
        <Box sx={{ display:"flex",alignItems:"center",justifyContent:"center", height:"10vh",
        "@media(orientation:portrait)":{
          fontSize:"1.3vh"
        },
        fontSize:{xs:"0.3rem",sm:"0.35rem",md:"0.45rem",lg:"0.6rem",xl:"0.7rem"}}}> 
          <b> {product.name}</b>
        </Box>
      </a>
      <Box  sx={{  width:"100%" }}>
      { cartScreen?
        //cart screen
        <Button sx={{borderRadius:0,minHeight:"3vh" ,minWidth:"auto",fontSize:"2vh" }} fullWidth={true} variant="contained"onClick={()=>dispatch(removeFromCart(product))}>
          <Delete sx={{marginRight:"5px",fontSize:"2vh" }} />
          <Box sx={{display:{xs:"none",md:"block"}}}>Remove</Box>
        </Button>
      :
      //products screen
      <Box>

          <Box 
          sx={{display:"flex",justifyContent:"space-between",alignItems:"baseline",flexDirection:"row",fontWeight:"bold",border:"solid black",borderWidth:"1px 0 0px 0"}}>
            <Typography  sx={{fontWeight:"bold"}} >Price:</Typography>
            <Typography sx={{fontWeight:"bold",color:"primary.dark"}}> {product.price}$</Typography>
          </Box>
          <Button sx={{borderRadius:0,minHeight:"3vh",minWidth:"auto",fontSize:{md:"0.6rem",xl:"1rem"}}} 
          fullWidth={true} variant="contained"
          onClick={()=>{
            openDetail(product);
          }}>
              <AddShoppingCart sx={{marginRight:"5px",fontSize:"2vh" }} />
              Add
          </Button>
        </Box>
        }
      </Box>
    </Box>
    :
    <Skeleton variant="rectangular" height={"40vh"} width={frameWidth}/>
    }
    </Box>
  )
};
Product.defaultProps = {
  openDetail: null,
  cartScreen:false,
  product:"",
}


export default Product;