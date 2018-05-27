import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';


const styles={
  btn:{
    display:'none'
  },
  nav:{
    textDecoration:"none",
    color:"#000",
    overflow:'auto'
  },

  '@media (max-width:767px)':{
    btn:{
      display:'block'
    }
  }
};



class MenuList extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const classes=this.props.classes;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={classes.btn}
        >
          <MenuIcon/> 
        </Button>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Link className={classes.nav} to="/">HOME</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link className={classes.nav} to="#">ABOUT</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link className={classes.nav} to="#">CONTACT</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
             <Link className={classes.nav} to="#">BAG</Link>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default injectSheet(styles)(MenuList)







