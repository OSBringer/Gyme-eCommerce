import {useEffect,useState} from 'react'
import {AppBar,Badge ,IconButton ,Menu,MenuItem,Toolbar,Box,Link ,Button,Container,Typography} from '@mui/material';
// import { Link } from 'react-router-dom';
import {Menu as MenuIcon,ShoppingCart,Home} from '@mui/icons-material';
import {useSelector} from "react-redux";
const pages = ['men', 'women', 'supplements',"snacks","machines"];

const Navigation = () => {
    const cart =useSelector ((state)=>state.cart.cart)

    const [cartCount,setCartCount]=useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    useEffect(() => {
      let count=0;
    cart.forEach(element => {
        if(element)
            count+= parseInt(element.quantity);
    });
      setCartCount(count);
    }, [cart])

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
    <div>
        <AppBar position="static" sx={{padding:0}}>
            <Container   maxWidth="xl" sx={{padding:0}}>
                <Toolbar disableGutters  sx={{justifyContent:"space-between"}} >
                    <Typography variant="h2" >
                        Gyme
                    </Typography>
                    <Box sx={{ alignItems:"center", display:{xs: 'none', md: 'flex', lg: 'flex' } }}>
                        <Link href={"/"} style={{textDecoration:"none",display:"flex",color:"inherit"}}>
                            <Home fontSize='50px' />
                        </Link>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            component={Link}
                            href={`/products/${page}`}
                            sx={{
                                "&:hover":{
                                    textDecoration:"none",
                                    color:"inherit"
                                },
                                height:50,
                                width:140,
                                fontSize:"large",
                                color: "inherit",
                                display: "flex" }}>
                            {page}
                        </Button>
                        ))}
                    </Box>
                    <Link href={"/cart/checkout"} style={{textDecoration:"none",display:"flex",color:"inherit"}}>
                        <Box sx={{width:"3vw",   display:{xs: 'none', md: 'flex', lg: 'flex' }}}>
                            <Badge  badgeContent={cartCount} color="secondary">
                                <ShoppingCart fontSize='50px'/>
                            </Badge>

                        </Box>
                    </Link>
                    <Box sx={{ display:{xs: 'flex', md: 'none', lg: 'none' } }}>
                        <IconButton  sx={{ color:"inherit"}}onClick={handleClick}>
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            sx={{width:"100%"}}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}>
                            {pages.map((page) => (
                            <MenuItem

                                key={page}
                                component={Link}
                                href={`/products/${page}`}
                            >
                                {page.toUpperCase()}
                            </MenuItem>
                            ))}
                              <MenuItem 
                                component={Link}
                                href={`/cart/checkout`}>
                                    <Badge  badgeContent={cartCount} color="secondary">
                                        <ShoppingCart/>
                                    </Badge>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
        </Container>
        </AppBar>
    </div>
  )
}

export default Navigation