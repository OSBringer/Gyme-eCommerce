import {React,useState,useEffect} from 'react'
import Navigation from '../../Components/Navigation/Navigation';
import Checkout from '../Checkout/Checkout';
import {useSelector} from "react-redux";
import style from "./Cart.module.scss"
import Address from '../Address/Address';
import Confirmation from '../Confirmation/Confirmation';
import { useLocation } from 'react-router-dom';
import {Box,Container,Link ,Stepper,StepButton,Step,StepLabel,Button,Typography} from '@mui/material';



const Cart = () => {
  const location = useLocation();
  const category=location.pathname.split("/cart/").filter(element => element)
  const [stepper,setStepper]=useState(1);
  const RenderStep = () => {
    let component= <Checkout/>;
    switch(category[0]){
      case "checkout":
        setStepper(1)
        component=<Checkout/>;
        break;
      case "address_and_billing":
        component=<Address/>;
        setStepper(2)
        break;
      case "confirmation":
        component=<Confirmation/>;
        setStepper(3)
        break;
      case "payment":
        setStepper(4)
        break;
    }
    return component;
  }

  return (
    <Container sx={{bgcolor:"background.default",minHeight:"fit-content"}} maxWidth="full">
      <Navigation/>
      <Stepper  sx={{marginTop:4}} activeStep={stepper} alternativeLabel>
          <Step expanded={true}  key={"checkout"}>
            <StepButton className={style.stepButton} component={Link} href='/cart/checkout' >
              <StepLabel>Cart</StepLabel>
            </StepButton>
          </Step>
        <Step  key={"address"}>
          <StepButton disabled={stepper<=1?true:false}  className={style.stepButton} component={Link} href='/cart/address_and_billing' >
            <StepLabel>Address & Billing</StepLabel>
          </StepButton>
        </Step>
        <Step key={"confirmation"}>
          <StepButton disabled={stepper<=2?true:false} className={style.stepButton} component={Link} href='/cart/confirmation' >
            <StepLabel>Confirmation</StepLabel>
          </StepButton>
        </Step>
        <Step key={"payment"}>
          <StepButton disabled={stepper<=3?true:false} className={style.stepButton} component={Link} href='/cart/checkout' >
            <StepLabel>Payment</StepLabel>
          </StepButton>
        </Step>
      </Stepper>
      {<RenderStep/>}
    </Container>
  )
}


export default Cart;