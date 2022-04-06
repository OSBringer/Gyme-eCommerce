import {React,useState} from 'react'
import {Box,Container,FormControl ,Link,Checkbox, Button} from '@mui/material';
import Motivation from "../Motivation/Motivation";
import {LinkedIn,GitHub,Mail,Phone,Work,Build,AutoAwesome} from '@mui/icons-material';
function Footer() {
  const [openMotivation,setOpenMotivation]=useState(false);
  const handleMotivation = () => { 
    setOpenMotivation(!openMotivation)
  }

  return (
    <Box sx={{
        display:"flex",
        overflow:"hidden",
        flexDirection:"column",
        maxWidth:"2000px",
        border:"solid black",
        borderWidth:"0 0.5px 0px 0.5px",
        width:"100%",
        margin:"0 auto",
        marginTop:"30vh",
        color:"white",
        bgcolor:"secondary.main",
        maxHeight:"40vh",
        }}>
      <Motivation open={openMotivation}  handleMotivation={handleMotivation}/>
       <Box sx={{width:"100%",bgcolor:"primary.main"}}>
         © Gyme s.r.o.
       </Box>
       <Box  textAlign={"left"}  sx={{display:"grid",fontSize:"1.5rem",flexDirection:"column",paddingBottom:4,width:"100%", margin:"auto",gridTemplateRows:"1fr 1fr",gridTemplateColumns:"1fr 1fr 1fr"}}>
            <Box sx={{fontWeight:"bold",alignSelf:"end"}}> Contact us</Box>
            <Box sx={{fontWeight:"bold",alignSelf:"end"}}> About me</Box>
            <Box sx={{fontWeight:"bold",alignSelf:"end"}}> About site</Box>
            <Box  sx={{display:"flex",textAlign:"justify", justifyContent:"center",flexDirection:"column",gridRow:2 }} gridColumn={1} >
              <Link><Work/>Carier</Link>
              <Link><Mail/>support@gyme.com</Link>
              <Link><Phone/>+421912345678</Link>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center",flexDirection:"column",gridRow:2 }} gridColumn={2}>
              <Link  href={"mailto: bhlavienka@gmail.com"}><Mail/>bhlavienka@gmail.com</Link>
              <Link href={"https://www.linkedin.com/in/boris-hlavienka-567527163/"}><LinkedIn/>Boris Hlavienka</Link>
              <Link href={"https://github.com/OSBringer"}><GitHub/>OSBringer</Link>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center",flexDirection:"column",gridRow:2 }} gridColumn={3}>
              <Link sx={{cursor:"pointer"}} onClick={handleMotivation}  ><AutoAwesome/>Motivation</Link>
              <Link href={"https://stackshare.io/osbringer/gyme-ecommerce"}><Build/>Tech stack</Link>
              <Link href={"https://github.com/OSBringer/Gyme-eCommerce"}><GitHub/>GitHub</Link>
            </Box>
       </Box>
    </Box>
  )
}

export default Footer