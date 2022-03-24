import {React,useState,useEffect} from 'react'
import {Close,AddShoppingCart} from '@mui/icons-material';
import {IconButton,Box,Container,Button,Select,MenuItem,InputLabel,FormControl,TextField} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import  {addToCart} from '../../features/cart/cartSlice';
import { JSON } from 'mysql/lib/protocol/constants/types';
import Products from '../../Screens/Products/Products';
const Detail = ({product,close,showSnackbar}) => {
    const [size,setSize]=useState("");
    const [qty,setQty]=useState(1);
    let copyProduct ;
    const handleSetSize=(e)=>{
        setSize(e.target.value);
    }
    const handleChange = (e)=>{
        setQty(e.target.value)
    }
    useEffect(() => {
        //set initial size if there is size for that product
        product ? product.size ? setSize(product.size[0]) :setSize("") :setSize("");
    }, [product])

    const dispatch = useDispatch();
    return (
        <Container 
        sx={{
            display:"grid",
            "@media(orientation: portrait)":{
                display:"block",
            },
            maxWidth:"90vw",
            minWidth:"80vw",
            height:"80%",
            zIndex:"2",
            bgcolor:"background.default",
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
                alignSelf:"center",
                alignContent:"center",
                width:"100%",
                maxHeight:"100%",
                justifyContent:"center",
                color:"text.primary",
               
                gridTemplateColumns:"  1fr 1fr 1fr ",
                gridTemplateRows:"1fr 1fr ",
                
            }}>
                <div style={{gridColumn:"1",width:"100%",fontSize:"1.5vh",display:"flex",flexDirection:"column"}}>
                <img src={product.image} style={{width:"25vw",maxWidth:"40vw",margin:"auto",maxHeight:"40vw"}}/>
                    <p >{product.name}</p>
                </div>
                <Box sx={{display:"flex",flexDirection:"column",gridRow:{lg:1,xl:2},gridColumn:{lg:2,xl:1}}}>
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
                        <TextField
                           
                            id="quantity"
                            label="Count"
                            size='small'
                            type="number"
                            variant="filled"
                            defaultValue={1}
                            onChange={handleChange}
                            inputProps={{
                                min:1
                            }}
                        />
                        <Button 
                        sx={{maxHeight:"5vh"}}
                            size='large' 
                            variant="contained" 
                            onClick={()=>{
                            copyProduct = Object.assign({quantity:parseInt(qty),selectedSize:size}, product)
                            qty>=1 &&(!product.size || size!=="") ?
                                dispatch(addToCart(copyProduct))&&
                                showSnackbar("success")
                                :showSnackbar("error")
                                }
                            }
                        >
                            <AddShoppingCart sx={{maxHeight:"5vh"}}/>
                        </Button>
                    </Box>
            
            <Box >
                <Box  sx={{textAling:"end",fontSize:"1.2vh",minWidth:"20vw",maxWidth:"auto",gridColumnStart:"3"}}>
                    {product.description}
                </Box>
                <Box component="form" sx={{display:"flex",alignSelf:"flex-end",marginTop:"auto",justifyContent:"center"}}>
                </Box>
            </Box>
            </Container>
            :
          
            <Box sx={{color:"error.main"}}>Error: Cannot load product</Box>}
            <IconButton  onClick={close} sx={{width:"2vh",position:"absolute"}}component="span">
                < Close sx={{fontSize:"1.9vh"}} />
            </IconButton>
        </Container>
    )
}

export default Detail