import {React,useEffect,useState} from 'react';
import styles from './Home.module.scss';
import {getProducts} from '../../features/cart/cartSlice';
import Footer from '../../Components/Footer/Footer';
import Navigation from '../../Components/Navigation/Navigation';
import HomeNav from '../../Components/HomeNav/HomeNav';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import {useSelector,useDispatch} from "react-redux";
import {Container} from '@mui/material';
const Home = () => {
  const products =useSelector ((state)=>state.cart.products);
  const dispatch= useDispatch();
  const selectRandomProducts= () =>{
    const keys = Object.keys(products)
    const randIndex = Math.floor(Math.random() * keys.length)
    console.log(randIndex)
    dispatch(getProducts( `products?_start=${randIndex}&_end=${randIndex+5}`))
  }

  useEffect(() => {
    dispatch(getProducts(`products`))
  }, [])


  return (
      <Container     maxWidth={"full"} sx={{bgcolor:"background.default"  }}>
          <Navigation/>
          <HomeNav />
          <ProductCarousel products={products}  />
          <Footer/>
      </Container>
  )
}

export default Home;