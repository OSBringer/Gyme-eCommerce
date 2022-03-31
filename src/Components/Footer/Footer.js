import React from 'react'
import {Box,Container,FormControl ,Link,Checkbox, Button} from '@mui/material';
import {LinkedIn,GitHub,Mail} from '@mui/icons-material';
function Footer() {
  return (
    <Box sx={{
        display:"flex",
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
       <Box sx={{width:"100%",bgcolor:"primary.main"}}>
         © Gyme s.r.o.
       </Box>
       
       <Box  sx={{display:"grid",flexDirection:"column",width:"100%", margin:"auto",gridTemplateRows:"1fr 1fr",gridTemplateColumns:"1fr 1fr 1fr"}}>
            <Box sx={{fontWeight:"bold",alignSelf:"end"}}> Contact us</Box>
            <Box sx={{fontWeight:"bold",alignSelf:"end"}}> About me</Box>
            <Box sx={{fontWeight:"bold",alignSelf:"end"}}> Contact us</Box>
            <Box  sx={{display:"flex", justifyContent:"center",flexDirection:"column",gridRow:2 }} gridColumn={1} >
              <Link>Contact</Link>
              <Link>Contact</Link>
              <Link>Contact</Link>
            </Box>
            <Box textAlign={"left"} sx={{margin:"0 auto"}}  gridColumn={2}>
              <Box><Mail/> bhlavienka@gmail.com</Box>
              <Box><LinkedIn/>Boris Hlavienka</Box>
              <Box><GitHub/>OSBringer</Box>
            </Box>
            <Box gridColumn={3}>
              <Box>Contact</Box>
              <Box>Contact</Box>
              <Box>Contact</Box>
            </Box>
       </Box>
    </Box>
  )
}

export default Footer