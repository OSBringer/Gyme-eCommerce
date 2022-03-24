import React from 'react'
import {Box,Container,Typography} from '@mui/material';
import { grid } from '@mui/system';
import { Link } from "react-router-dom";
import styles from "./Banner.module.scss"
const Banner = ({href,image,text}) => {
  const images = require.context('../../assets/images', true);
  return (
    <Link to={`products/${href}`} className={styles.Banner}>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",
                cursor:"pointer",
                height:"100%",
                maxHeight:"300px",
                border:"0.3vh solid",
                borderRadius:"1vh", 
                bgcolor:"secondary.main"}}>
                <img style={{maxHeight:"8vh"}}src={image?images(image):images("./protein-bar (Small).png")}/>
                <Typography  sx={{color:"text.primary" ,fontSize:"3vh"}}>
                {text}
                </Typography>
        </Box>
    </Link>
  )
}

export default Banner