import {React,useState,useRef,useEffect} from 'react'
import {NavigateBefore,NavigateNext} from '@mui/icons-material';
import {Box,Container,Button ,CircularProgress} from '@mui/material';
import Product from '../Product/Product';
import {useSelector} from "react-redux";
import Detail from '../Detail/Detail';
const ProductCarousel = ({products}) => {
    const [productsMargin,setProductsMargin]=useState(0);
    const [openDetail,setOpenDetail]= useState({
        open:false,
        product:null
    });
    const ref = useRef(null);

    const handleDetail=(x)=>{
        setOpenDetail({...openDetail,open:!openDetail.open,product:x});
    }
    const handleNext = ()=>{
         if(productsMargin < 3*5)
            setProductsMargin(productsMargin+1)
        else{
            setProductsMargin(0)
        }
    }
    const handleBefore = ()=>{
        if (productsMargin>0)
            setProductsMargin(productsMargin-1)
        if (productsMargin===0)
            setProductsMargin(3*5)
    }
    const loading =useSelector ((state)=>state.cart.status);
    useEffect(() => {
        const handleResize = () => {
            setProductsMargin(0)
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    },1000)
    return (
        <Box sx={{display:"flex",maxWidth:"2000px",margin:"auto",minHeight:"20vh",marginTop:"5vh",bgcolor:"backgrou nd.secondary"}}>
            <Detail product={openDetail.product} open={openDetail.open} handleDetail={handleDetail} />
            {loading==="pending"?
                <CircularProgress size="6rem" sx={{margin:"auto"}}/>
            :
            <>
                <Button sx={{width:"5vw",minWidth:"auto",padding:0}} variant="contained" onClick={handleBefore}><NavigateBefore/></Button>
                    <div style= {{overflow:"hidden"}}>
                        <div  ref={ref} style= {{transition:"ease 1s",transform:`translateX(-${productsMargin *5}%)` ,display:"inline-flex",alignItems:"center",gap:"1vw"}}>
                        {products.map((obj,index)=>(
                                <Product
                                openDetail={(productDetail)=>handleDetail(productDetail)}
                                cartScreen={false}
                                product={obj}/>
                        ))}
                        </div>
                    </div>
                <Button sx={{width:"5vw",maxWidth:"20vw",minWidth:"auto",padding:0}} variant="contained"  onClick={handleNext}><NavigateNext /></Button>
            </>

            }
        </Box>
    )
    
}

export default ProductCarousel