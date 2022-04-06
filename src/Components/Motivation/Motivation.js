import React from 'react'
import {Box,Container,Backdrop,Button,Typography} from '@mui/material';
function Motivation({open,handleMotivation}) {
  return (
    <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={()=>handleMotivation()}
        >
            <Container 
            sx={{
                overflow:"auto",
                display:"grid",
                "@media(orientation: portrait)":{
                    display:"block",
                },
                maxWidth:"90vw",
                borderRadius:"0.5vw",
                minWidth:"80vw",
                maxHeight:"85%",
                height:"fit-content",
                zIndex:"2",
                bgcolor:"background.secondary",
                position:"fixed",
                margin:"auto",
                left: 0,
                right: 0,
                top:0,
                bottom:0
            }}
                onClick={e=>e.stopPropagation()}
            >
                <Typography variant='h2' color={"primary.dark"}>Motivation</Typography>
            <Typography textAlign={"justify"} color={"text.primary"}>
            <Typography variant="h5" color={"primary.light"}>Goal</Typography>
            <p>This website was created with intent of expanding my experience and practice with ReactJS framework and many other tools.<br/>
                I chose e-commerce website which main focus would be to sell gym equipment and colthing, therefor the name <b>Gyme</b>.<br/>
                My <b>main goal</b> for this website was it to be responsive as much as possible and also simple to navigate with clear <b>CTA</b> strategy.<br/>
                However what was <b>not my goal</b> was to implement SEO strategies, web analysis, limitations for old and not supported devices.
                That ones i leave for my future projects maybe with <b>NextJS</b> or some similar framework. :)
                </p>
                <Typography variant="h5" color={"primary.light"} >Tools & what i learned</Typography>
                <p>
                The <b>MUI component library</b> which i used really helped me with the common problem developers face and that is <i>"reinventing the wheel"</i>.
                This library has briliant documentation with many possibilities of bending the style to really fit the purpose of the website.
                I chose to style components <i>"inline"</i> which might not be the cleanest way possible, if i look at it now i would have done it diffrently for sure.
                </p>
                <p>
                The site uses <b>Redux</b> state managment to eliminate prop drilling and clarify state changes between components and screens.
                I used more modern aproach of implementing Redux reducers and action with <b>createSlice</b>. Also using Redux toolkit in browser is very simple and briliant.
                However this tool has one downfall which is lot of boilerplate coding and repetition. It is a powerfull tool but should probably be used on a projects that really require it, which Gyme is.
                </p>
                <p>
                As this site is mainly front-end based project i didn't bother myself with building back-end and database. For purpose of this website i used <b>JSON Server</b>. 
                The data is stored on a local machine formated as JSON. I use simple asyn calls directly from Redux to retrieve the data from mimiced back-end. 
                JSON Server also has a query language for sorting and filtering out data, which was helpful.
                </p>
                <Typography sx ={{textIndent:"1vw"}}>
                    <Typography variant='h6' color={"primary.light"}>Honorable mentions</Typography>
                    <p>GitHub for version controll, SASS,CSS for styling some components
                    </p>
                </Typography>
                <Typography variant="h5" color={"primary.light"} >What is left </Typography>
                <ul>
                There are many things that i could have done diffrently, and put more focus to them. For example:
                    <li> Image sizing and responsive design of text overall.</li>
                    <li>Also for this kind of website is probably good to have  some kind of user recognition login,cookies storing etc. </li>
                    <li>The website could pay atention to more SEO stuff, link, identifiocation of DOM elements etc.</li>
                    <li>Payment method is not implemented which would be surely possible with tools like Stripe or Paypal.</li>
                    <li>Testing ...</li>
                </ul>
                <Typography variant="h5" color={"primary.light"} >Final words</Typography>
                <p>
                    I enjoyed working on this project and maybe someday i will come back to it and put more time into it.<br/>
                    However it i crave to explore more tools and practices in web development than this site could offer at this stage and time.<br/>
                    The link to my next project is(or will be here) <a href='#'>here</a>.
                    <br/>-<b>Boris</b>
                </p>
            </Typography>
        </Container>
    </Backdrop>
  )
}

export default Motivation;