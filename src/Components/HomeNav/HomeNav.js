import React from 'react'
import CarouselComp from '../Carousel/Carousel';
import Banner from '../Banner/Banner';
import {Box,Container,Pagination ,List ,ListItem,ListItemButton,ListItemText,Typography} from '@mui/material';
const HomeNav = () => {
  return (
    <Box >
          <Box 
            sx={{display:"flex", margin:"auto",maxWidth:"2000px",bgcolor:'secondary.main'}} >
              <CarouselComp />
          </Box>
          <Box
            sx={{
              minHeight:"20vh",
              minWidth:"5vw",
              maxWidth:"2000px",
              flexWrap:'wrap',
              margin:"auto",
              marginTop:"3vh",
              display: "grid",
              gap: 1,
              gridTemplateColumns: {md:'repeat(3, 1fr)'},
            }}
          >
            <Banner href="supplements" text="Supplements" image={"./supplements.png"}/>
            <Banner href="machines" text="Machines" image={"./machine.png"}/>
            <Banner href="men" text="Men" image={"./men-clothes.png"}/>
            <Banner href="snacks" text="Fit Snacks" image={"./protein-bar.png"}/>
            <Banner href="women" text="Women"image={"./women-clothes.png"}/>
            <Banner href="supplements" text="Supplements" image={"./supplements.png"}/>
        </Box>
    </Box>
  )
}

export default HomeNav