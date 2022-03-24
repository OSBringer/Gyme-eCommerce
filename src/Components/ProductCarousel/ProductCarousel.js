import {React,useState,useRef,useEffect} from 'react'
import {NavigateBefore,NavigateNext} from '@mui/icons-material';
import {Box,Container,Button ,PaginationItem,Grid,Link ,Alert,Snackbar,Backdrop} from '@mui/material';
import Product from '../Product/Product';
import {useSelector} from "react-redux";
import Detail from '../Detail/Detail';
const ProductCarousel = ({products}) => {
    const [productsMargin,setProductsMargin]=useState(0);
    const ref = useRef(null)
    const handleNext = ()=>{
        if(productsMargin <  (Object.keys(products).length)-(100*2/Object.keys(products).length))
            setProductsMargin(productsMargin+1)
            console.log(productsMargin)
    }
    const handleBefore = ()=>{
        if (productsMargin>0)
            setProductsMargin(productsMargin-1)
    }
    const loading =useSelector ((state)=>state.cart.status);
    return (
        <Box sx={{display:"flex",maxWidth:"2000px",margin:"auto",minHeight:"20vh",marginTop:"5vh",width:"fit",bgcolor:"background.secondary"}}>
            {loading==="pending"?
            <h1 style={{margin:"auto"}}>SUCK</h1>
            :
            <>
                <Button sx={{width:"20vw",minWidth:"auto",padding:0}} variant="contained" onClick={handleBefore}><NavigateBefore/></Button>
                    <div style= {{overflow:"hidden"}}>
                        <div  style= {{ transition:"ease 0.3s",transform:`translateX(-${productsMargin* 100/Object.keys(products).length}%)` ,display:"inline-flex",alignItems:"center",justifyContent:"center"}}>
                        {products.map((obj,index)=>(
                            <Box  sx={{ padding:"1vw",width:"20%"}}key={index}>
                                <Product   cartScreen={false} product={obj}/>
                            </Box>
                        ))}
                        </div>
                    </div>
                <Button sx={{width:"20vw",minWidth:"auto",padding:0}} variant="contained"  onClick={handleNext}><NavigateNext /></Button>
            </>

            }
        </Box>
    )
}

export default ProductCarousel