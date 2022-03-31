import {React, useState,useEffect} from 'react'
import {Container,FormControl,FormGroup ,TextField,Checkbox,Box,Link, Button,Grid} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import {Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";
const Address = ({confirmationScreen}) => {
  const getFormInfo = () => {
    const localStorage = window.localStorage;
    let formInfo = {email:"",firstName:"",lastName:"",address:"",city:"",zip:"",phone:""};
    if (localStorage.getItem("addressForm") !== null){
      formInfo = JSON.parse(localStorage.getItem("addressForm"));
    }
    return formInfo;
  }
  const[form,setForm]=useState(getFormInfo())
  const[redirect,setRedirect]=useState(false)
  const cartProducts=useSelector((state)=>state.cart.cart)
  //set local storge whenever form changes
  useEffect(() => {
    localStorage.setItem("addressForm",JSON.stringify(form));
  }, [form])

  const handleSubmit = (e) => {
    e.preventDefault();
    // async send to BE 
    setRedirect(true);
  }

  const getTotal =()=>{
    let total=0;
    cartProducts.map(obj=>(
        total+=parseInt(obj.price)*obj.quantity
    ))
    return total;
  }



  return (
    <Container maxWidth="full">
      <Grid  sx={{alignItems:"center",justifyContent:"space-between"}}container columns={2}>
        <Grid sx={{width:{xs:"100%",md:"auto"}}}item key={"form"}>
        <form   onSubmit={handleSubmit}> 
          <fieldset style={{minWidth:"40vw",gap:3,display:"flex",flexDirection:"column"}}disabled={confirmationScreen}>
          <FormControl  margin="normal" variant="filled" component="fieldset"  >
              <TextField
              sx={{bgcolor:"background.secondary"}}
              disabled={confirmationScreen}
              required
              label="EMAIL"
              value={form.email}
              onChange={(e)=> setForm(prevState=>{return{...prevState,email:e.target.value}})}
              id="email"
              type="email"
              aria-describedby="email" />
          </FormControl>
          <FormControl  margin="normal" variant="filled" component="fieldset"  >
              <TextField
              sx={{bgcolor:"background.secondary"}}
              required
              disabled={confirmationScreen}
              inputProps={{ pattern:"[^0-9]+"}}
              label="FIRST NAME"
              value={form.firstName}
              onChange={(e)=> setForm(prevState=>{return{...prevState,firstName:e.target.value}})}
              id="firstName"
              aria-describedby="firstName" />
            </FormControl>
          <FormControl  margin="normal" variant="filled" component="fieldset"  >
              <TextField
              sx={{bgcolor:"background.secondary"}}
              required
              disabled={confirmationScreen}
              inputProps={{ pattern:"[^0-9]+"}}
              label="LAST NAME"
              value={form.lastName}
              onChange={(e)=> setForm(prevState=>{return{...prevState,lastName:e.target.value}})}
              id="lastName"
              aria-describedby="lastName" />
            </FormControl>
          <FormControl  margin="normal" variant="filled" component="fieldset"  >
              <TextField
              sx={{bgcolor:"background.secondary"}}
              disabled={confirmationScreen}
              required
              label="ADDRESS"
              value={form.address}
              onChange={(e)=> setForm(prevState=>{return{...prevState,address:e.target.value}})}
              id="address"
              aria-describedby="address" />
            </FormControl>
          <FormControl  margin="normal" variant="filled" component="fieldset"  >
              <TextField
              sx={{bgcolor:"background.secondary"}}
              inputProps={{ pattern:"[^0-9]+"}}
              required
              disabled={confirmationScreen}
              label="CITY"
              value={form.city}
              onChange={(e)=> setForm(prevState=>{return{...prevState,city:e.target.value}})}
              id="city"
              aria-describedby="city" />
            </FormControl>
          <FormControl  margin="normal" variant="filled" component="fieldset"  >
              <TextField
              sx={{bgcolor:"background.secondary"}}
              required
              disabled={confirmationScreen}
              label="ZIP"
              value={form.zip}
              onChange={(e)=> setForm(prevState=>{return{...prevState,zip:e.target.value}})}
              type="number"
              id="zip"
              aria-describedby="zip" />
            </FormControl>
            <FormControl  margin="normal" variant="filled" component="fieldset"  >
              <TextField
              sx={{bgcolor:"background.secondary"}}
              required
              disabled={confirmationScreen}
              label="PHONE"
              value={form.phone}
              onChange={(e)=> setForm(prevState=>{return{...prevState,phone:e.target.value}})}
              type="phone"
              id="phone"
              aria-describedby="phone" />
            </FormControl>
            </fieldset>
            {confirmationScreen?
              <Box>
                
              </Box>
              :
              <Box fontSize={"0.9rem"} textAlign="left"><a style={{color:"red"}}>*</a>Required informations</Box>
            }
            {confirmationScreen ? <Box > <CheckCircle/></Box> : <Button variant= "contained" type="submit">Next</Button>}
          <Box sx={{display:"inline-block"}} fontSize={"0.8rem"}>
          </Box>
          </form>
          {redirect && <Navigate to="/cart/confirmation"/>}
          </Grid>
          <Grid sx={{
            display:"flex",
            flexDirection:"column",
            marginLeft:"auto",
            marginRight:"auto",
            fontSize:"1rem",
            minWidth:"30vw",
            border:1 ,
            borderRadius:"4px",
            bgcolor:"background.secondary",
            height:"fit-content",
            marginTop:{xs:2,md:0},
            padding:0.5,
            }} item >
            <span style={{borderBottom:2}}><b>Summary</b></span>
            <span>
              {cartProducts.map(obj=>{
                return <div><b>{obj.quantity}x</b> {obj.name} {obj.selectedSize}</div>
              })}
            </span>
            <Box sx={{borderBottom:2,width:"100%", height:"fit-content",borderColor:"black"}} ><b>Total</b></Box>
            <h2>{getTotal()}$</h2>
          </Grid>
        </Grid>
    </Container>
  )
}

export default Address