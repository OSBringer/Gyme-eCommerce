import React from 'react';
import  Home from './Screens/Home/Home.jsx';
import './App.css';
import { themeOptions,formLabelsTheme } from './assets/theme';
import {  ThemeProvider } from '@mui/material/styles';
import Products from './Screens/Products/Products';
import Cart from './Screens/Cart/Cart'
import NotFound from './Screens/NotFound/NotFound.jsx';
import { BrowserRouter, Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={themeOptions}>
          <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/products" element={<Products />} >
              <Route path="/products/women"/>  
              <Route path="/products/men"/>  
              <Route path="/products/supplements"/>  
              <Route path="/products/snacks"/>  
              <Route path="/products/machines"/>  
            </Route>
            <Route path="/cart" element={<Cart />} >
              <Route path="/cart/checkout" /> 
              <Route path="/cart/address_and_billing"/> 
              <Route path="/cart/confirmation"/> 
            </Route>
            <Route path="*" element={<NotFound/>} />
          </Routes>
          </BrowserRouter>
        
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
