import React from 'react'
import Address from '../Address/Address';
import {Box,Container,FormControl ,Link,Checkbox, Button} from '@mui/material';
const Confirmation = () => {
  return (
    <Container maxWidth="full">
      <form action="">
        <Box>
          
          <Address confirmationScreen={true}/>
          <p><Checkbox required/>I confirm my order with the condition to pay for it</p>
          <Checkbox required/> I agree with <Link onClick={()=>alert("blabla terms blabla")}>terms</Link> and the informations in the form are valid and correct
        </Box>
        <Button component={Link} href={"/cart/address_and_billing"}>Back</Button>
        <Button type="submit" variant="contained">Next</Button>
      </form>
    </Container>
  )
}

export default Confirmation