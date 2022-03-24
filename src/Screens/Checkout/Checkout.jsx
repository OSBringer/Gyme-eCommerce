import React from 'react'
import Product from '../../Components/Product/Product';
import {useSelector} from "react-redux";
import {Box,Container,Paper ,Grid,Link, Button} from '@mui/material';


const Checkout = ({setStepper}) => {
    const cartProduct=useSelector((state)=>state.cart.cart)
    const getTotal =()=>{
        let total=0;
        cartProduct.map(obj=>(
        total+=parseInt(obj.price)*obj.quantity
        ))
        return total;
    }
    return (
        <Container maxWidth="full" >
        { cartProduct &&// 👈 null and undefined check
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
                <Product cartScreen={true} product={obj}/>
                <Box sx={{display:"flex",fontSize:"2.5vh",flexDirection:"column",alignContent:"space-around",marginLeft:"auto",textAlign:"start"}}>
                {obj.size && <p><b>Size:</b> {obj.selectedSize}</p>}
                <p><b>Quantity:</b> {obj.quantity}</p>
                <p><b>Price: </b>{obj.price}$</p>
                </Box>
            </Box>
            ))}
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