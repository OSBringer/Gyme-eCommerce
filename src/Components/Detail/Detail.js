import {React,useState,useEffect} from 'react'
import {Close,AddShoppingCart} from '@mui/icons-material';
import {IconButton,Box,Container,Backdrop,Button,Select,MenuItem,InputLabel,FormControl,TextField,Snackbar,Alert,CircularProgress} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import  {addToCart} from '../../features/cart/cartSlice';
import PropTypes from "prop-types";

import style from "./Detail.module.scss"
const Detail = ({product,open,handleDetail}) => {
    const [size,setSize]=useState("");
    const [qty,setQty]=useState(1);
    const [snackbarType,setSnackbarType]=useState("success");
    const [openSnackbar,setOpenSnackbar]=useState(false);
    const [errorVisivle,setErrorVisible]= useState(false);
    const handleSnackbar=(type)=>{
        setSnackbarType(type);
        setOpenSnackbar(true);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackbar(false);
    };
    let copyProduct ;
    const handleSetSize=(e)=>{
        setSize(e.target.value);
    }
    const handleChange = (e)=>{
        setQty(e.target.value)
    }
    useEffect(() => {
        //set initial size if there is size for that product
        product && product.quantity ? setQty(product.quantity ) : setQty(1)
        product ? product.size ? product.selectedSize ? setSize(product.selectedSize ): setSize(product.size[0]) :setSize("") :setSize("");
    }, [product])

    const dispatch = useDispatch();

    const getError = () => {
        setErrorVisible(false)
        const timer = setTimeout(() => {
            setErrorVisible(true)
        }, 1000);
        return () => clearTimeout(timer);
    }
    return (
        <>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={ product && open}
            onClick={()=>handleDetail()}
        >
            <Container 
            sx={{
                display:"grid",
                "@media(orientation: portrait)":{
                    display:"block",
                },
                maxWidth:"90vw",
                borderRadius:"0.5vw",
                minWidth:"80vw",
                maxHeight:"85%",
                height:"fit-content",
                zIndex:"2",
                bgcolor:"background.secondary",
                position:"fixed",
                margin:"auto",
                left: 0,
                right: 0,
                top:0,
                bottom:0
            }}
                onClick={e=>e.stopPropagation()}
            >
                {product ?
                <Container 
                sx={{display:"inherit",
                    flexWrap:"wrap",
                    marginTop:"2vh",
                    alignSelf:"center",
                    alignContent:"center",
                    width:"100%",
                    maxHeight:"100%",
                    justifyContent:"center",
                    color:"text.primary",
                    gridTemplateColumns:{sm:"  1fr 2fr ",lg:"1fr 1fr 1fr "},
                    gridTemplateRows:"1fr 1fr ",
                }}>
                    <div style={{display:"block",gridColumn:"1",width:"100%",fontSize:"2vh",display:"flex",flexDirection:"column"}}>
                        <img
                            className={style.productImage}
                            src={product.image}
                            style={{width:"25vw",maxWidth:"inherit",margin:"auto",height:"auto"}}
                        />
                            <text className={style.productName} >{product.name } </text>
                    </div>
                    <Box sx={{display:"flex",flexDirection:"column",height:"fit-content",gap:1,gridRow:{lg:1,xl:2},gridColumn:{xs:2,lg:2,xl:1}}}>
                        {product.size &&
                        <FormControl sx={{marginTop:"2vh" ,minWidth:"10vw"}}>
                            <InputLabel id="demo-simple-select-label">Size</InputLabel>
                            <Select sx={{padding:0,maxHeight:"15vh"}}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={size}
                                    label="Size"
                                    onChange={handleSetSize}
                            >
                                {product.size&& product.size.map((item)=>(
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                ))
                                }
                            </Select>
                        </FormControl>
                        }
                        <Box sx={{display:"flex",alignItems:"center"}}>
                            <TextField
                                sx={{width:"80%"}}
                                id="quantity"
                                label="Count"
                                size='small'
                                type="number"
                                variant="filled"
                                value={qty}
                                defaultValue={product.quantity ?product.quantity:1 }
                                onChange={handleChange}
                                inputProps={{
                                    min:1
                                }}
                            />
                            {qty ? <b style={{width:"20%"}}>{parseFloat(product.price*qty) }$</b>: <a style={{fontSize:"1vw",color:"red"}}>Select amount</a>}
                          </Box>
                            <Button 
                            sx={{maxHeight:"5vh"}}
                                size='large' 
                                variant="contained" 
                                onClick={()=>{
                                copyProduct = Object.assign({quantity:parseInt(qty),selectedSize:size}, product,{quantity:parseInt(qty),selectedSize:size})
                                qty>=1 &&(!product.size || size!=="") ?
                                    dispatch(addToCart(copyProduct))&&
                                    handleSnackbar("success")
                                    :handleSnackbar("error")
                                    }
                                }
                            >
                                <AddShoppingCart sx={{maxHeight:"5vh"}}/>
                            </Button>
                        </Box>
                <Box >
                    <Box  sx={{display:"block",padding:"1vw",textAling:"left",fontSize:"1.5vh",minWidth:"20vw",maxWidth:"auto",gridColumnStart:"3"}}>
                        {product.description}
                    </Box>
                </Box>
                </Container>
                :
                <Box sx={{color:"error.main"}}>{errorVisivle ? "Error : Could not load product" : <CircularProgress/>}</Box>}
                <IconButton  onClick={handleDetail} sx={{width:"2vh",position:"absolute",top:0,right:"1vw"}}component="span">
                    < Close sx={{fontSize:"1.9vh"}} />
                </IconButton>
            </Container>
        </Backdrop>
        <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={snackbarType} sx={{ width: '100%' }}>
              {snackbarType==="success" ? "Succesfully added to cart": "Please select valid quantity and size" }
            </Alert>
          </Snackbar>
        </>
    )
}

Detail.propTypes=   {
    product: PropTypes.object
}

Detail.defaultProps = {
    product: null
};

export default Detail