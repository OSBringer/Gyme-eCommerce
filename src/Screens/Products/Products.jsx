import {React,useEffect,useState} from 'react'
import Navigation from '../../Components/Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import {Box,Container,Pagination ,PaginationItem,Grid,Link ,Alert,Snackbar,Backdrop} from '@mui/material';
import {connect,useDispatch} from "react-redux";
import Product from '../../Components/Product/Product';
import Detail from '../../Components/Detail/Detail';
import {getProducts,getPages} from '../../features/cart/cartSlice';

const Products = ({products,pageCount}) => {
  const [openDetail,setOpenDetail]= useState({
      open:false,
      product:null
  });

  const [snackbarType,setSnackbarType]=useState("success");
  const [openSnackbar,setOpenSnackbar]=useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const category=location.pathname.split("/")
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

  const handleDetail=(x)=>{
    setOpenDetail({...openDetail,open:!openDetail.open,product:x});
  }
  useEffect(() => {
    dispatch(getProducts(`products?category=${category[category.length -1]}&_page=${page}&_limit=12`))
    dispatch(getPages(`products?category=${category[category.length -1]}`))
  }, [])

  return (
    <Container maxWidth={"full"} sx={{bgcolor:"background.default"}}>
        <Navigation/>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openDetail.open}
          onClick={handleDetail}
          >
          <Detail close={()=>setOpenDetail({...openDetail,open:!openDetail.open})}
          product={openDetail.product} showSnackbar={handleSnackbar}/>
        </Backdrop>
        <Box sx={{ marginTop:"2vh",marginRight:"auto",marginLeft:"auto",flexDirection:"column",maxWidth:"50vw"}}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}>
                  {products.map((obj,index) => (
                  <Grid item xs={2} sm={4} md={4} key={index} >
                    <Product openDetail={(productDetail)=>handleDetail(productDetail)}cartScreen={false} product={obj}/>
                  </Grid>
                  ))
                  }
              </Grid>
         </Box>
         <Box  sx={{ display:"flex",marginY:"10vh",justifyContent:"center"}}>
                <Pagination
                page={page}
                count={pageCount}
                renderItem={(item) => (
                  <PaginationItem
                    size="small"
                    component={Link}
                    href={`/products/${category[category.length -1]}${item.page === 1 ? '' : `?page=${item.page}`}`}
                    {...item}
                  />
                )}/>
          </Box>
          <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={snackbarType} sx={{ width: '100%' }}>
              {snackbarType==="success" ? "Succesfully added to cart": "Please select valid quantity and size" }
            </Alert>
          </Snackbar>
    </Container>
  )
}
const mapStateToProps= state =>{
  return{
    products: state.cart.products,
    pageCount: state.cart.pageCount,
  }
}

export default connect(mapStateToProps)(Products);