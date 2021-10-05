import React, {useState, useContext} from 'react'
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link } from 'react-router-dom';
import './NavBar.css'
import { CartContext } from '../../Context/Context';
import Widget from '../Witget/Widget';
import Cart from '../Cart/Cart';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      fontFamily: 'Permanent Marker',
      fontSize: '200%'
    },
  },
  order: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function NavBar() {
  const {cant, stateCompra} = useContext(CartContext);
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [stateCart, setStateCart] = useState(false);

  const openViewCart = () => {
    setStateCart(true)
  }

  const closeViewCart = () => {
    setStateCart(false)
  } 

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit" onClick={()=> openViewCart()} disabled={stateCompra}>
          <Badge badgeContent={cant} color="primary" invisible={stateCompra}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        Carrito
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position='static' style={{backgroundColor: '#f44336'}}>
        <Toolbar>
          <Link to={`/`} className={'link-conteiner'}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Widget></Widget>
          </IconButton>
          </Link>
          <Typography className={classes.title} variant="h6">
            Delivery Things !
          </Typography>
          <div className={classes.order}>
            <Link to={`/comercios`} style={{textDecoration:'none', color:'white'}}>
              <Typography variant="h6" className='order-title-style'>
                  Ver comercios
              </Typography>
            </Link>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit" onClick={()=> openViewCart()} disabled={stateCompra}>
              <Badge badgeContent={cant} color="primary" invisible={stateCompra}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <Cart state={stateCart} open={openViewCart} close={closeViewCart}></Cart>
    </div>
  );
}

export default NavBar
