import {React , useState} from 'react'
import Product from '../../Components/Product/Product';
import {useSelector,useDispatch} from "react-redux";
import {Box,Container,Paper ,Grid,Link,TextField, Button,Typography} from '@mui/material';
import Detail from '../../Components/Detail/Detail';
import { addToCart } from '../../features/cart/cartSlice';

const Checkout = ({setStepper}) => {
    const cartProduct=useSelector((state)=>state.cart.cart)
    const dispatch = useDispatch()
    const [openDetail,setOpenDetail]= useState({
        open:false,
        product:null
    });
    const handleDetail=(x)=>{
        setOpenDetail({...openDetail,open:!openDetail.open,product:x});
    }

    const handleQuantity =(e)=>{
        dispatch(addToCart(e))
    }
    //returns total number from price of products in the cart
    const getTotal =()=>{
        let total=0;
        cartProduct.map(obj=>(
            total+=parseInt(obj.price)*obj.quantity
        ))
        return total;
    }
    return (
        <Container sx={{maxWidth:"2000px"}}maxWidth="2000px" >
        <Detail product={openDetail.product}  open={openDetail.open} handleDetail={handleDetail}/>
        {   cartProduct &&// 👈 null and undefined check
            Object.keys(cartProduct).length !== 0 ?
            //conditional render if there are items in the basket
            <Grid container  justifyContent="space-between"  columns={2}>
            <Grid item key={1}>
            {cartProduct.map((obj,index) => (
                <Box 
                key={index}
                sx={{ 
                    bgcolor:"background.secondary", 
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center", 
                    maxWidth:"50vw",
                    border:1,
                    borderRadius:"0 2vw 2vw 0px",
                    margin:4
                }}>
                    <Product openDetail={(productDetail)=>handleDetail(productDetail)} cartScreen={true} product={obj}/>
                    <Box sx={{display:"flex",fontSize:"2.5vh",flexDirection:"column",alignItems:"space-between",marginLeft:"auto",textAlign:"start"}}>
                        {obj.size &&
                        <Box  sx={{display:"flex",fontSize:"2.5vh",flexDirection:"row",justifyContent:"space-between"}}>
                            <Typography  sx={{fontWeight:"bold"}} >Size:</Typography>
                            <Typography sx={{fontWeight:"bold",color:"primary.dark"}}> {obj.selectedSize}</Typography>
                        </Box>}
                        <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <TextField
                                    sx={{width:"60%"}}
                                    id="quantity"
                                    label="Count"
                                    size='small'
                                    type="number"
                                    value={obj.quantity}
                                    defaultValue={obj.quantity}
                                    onChange={(e)=>handleQuantity(Object.assign({quantity:e.target.value},obj,{quantity:e.target.value}))}
                                    InputProps={{
                                        style:{textAlign:"left"},
                                        inputProps: { min: 0, max: 20 }
                                    }}
                                />
                                 <Typography sx={{fontWeight:"bold",color:"primary.dark"}}> {obj.quantity}</Typography>
                        </Box>
                        <Box  sx={{display:"flex",fontSize:"2.5vh",flexDirection:"row",justifyContent:"space-between"}}>
                            <Typography  sx={{fontWeight:"bold"}} >Price:</Typography>
                            <Typography sx={{fontWeight:"bold",color:"primary.dark"}}> {obj.price}$</Typography>
                        </Box>
                    </Box>
                </Box>
            ))
            }
            </Grid>
            <Grid item key={2}>
            <Paper sx={{
                minWidth:"25vw",
                bgcolor:"background.secondary",
                margin:4,position:"sticky",
                top:"5vh",
                border:1,
                display:"flex",
                flexDirection:"column"
                }}>
                Total: {getTotal() }$
                <Button variant='contained'
                    component={Link}
                    href="/cart/address_and_billing"
                >Check Out</Button>
            </Paper>
            </Grid>
            </Grid>
            :
            //conditional render if basket is empty
            <Box sx={{display:"flex",alignItems:"center",flexDirection:"column",maxHeight:"10vh"}}>
            There is nothing in your cart 
            <Button 
            sx={{maxWidth:"30vw",
                color:'white',
                "&:hover":{
                textDecoration:"none",
                color:"white"
                }
            }}
                variant='contained' 
                component={Link} 
                href="/">
                Go Shopping
            </Button>
            </Box>
            }
        </Container>
    )
}

export default Checkout