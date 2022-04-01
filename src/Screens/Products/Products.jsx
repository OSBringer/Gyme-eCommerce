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
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const category=location.pathname.split("/")

  const handleDetail=(e)=>{
    
    setOpenDetail({...openDetail,open:!openDetail.open,product:e});
  }
  useEffect(() => {
    dispatch(getProducts(`products?category=${category[category.length -1]}&_page=${page}&_limit=12`))
    dispatch(getPages(`products?category=${category[category.length -1]}`))
  }, [])

  return (
    <Container maxWidth={"full"} sx={{bgcolor:"background.default"}}>
        <Navigation/>
        <Detail product={openDetail.product} open={openDetail.open} handleDetail={handleDetail}/>
        {console.log(products)}
        { products.length ? 
        <>
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
          </>
          :
          <Box sx={{width:"100%",margin:"auto",width:"20vw"}}> 
            ..ugh, this page is empty ... sorry
            <img src={require('../../assets/images/empty.png')} alt="responsive image" className="d-block w-100"/>
          </Box>
          }

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