import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import MenuList from '../helpers/MenuList';
import { Typography } from '@material-ui/core';


const styles={
  
  container:{
    display:'flex',
    boxShadow: '0px 0 8px #888888',
    border:'1px solid #DCDCDC',
    margin:0,
    width:'100%',
    height:'100%',
    position:'relative',
  },
  headerLeft:{
    display:"flex",
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    textDecoration:"none",

    '& $aside':{
      fontSize:16,
      color:'#000',
      '&:hover':{
        color:'#FF0033',
        fontWeight:'bold'
    }
    }
    
  },
  headerRight:{
    display:"flex",
    flex:1,
    justifyContent:'center',
    alignItems:"center",
   
  },
  insideRight:{
    display:"flex",
    listStyleType:"none",
    width: '45%',
    justifyContent: 'space-around',
    marginRight:129
  },
  nav:{
    textDecoration:"none",
    color:"#000",
    overflow:'auto',
    "&:hover":{
      color:'#FF0033',
      fontWeight:'bold'
    }
  },
  mobileHeader:{
    display:'none'
  },
  '@media (min-width: 992px) and (max-width: 1199px)': {
    insideRight:{
      width:"50%",
      marginRight:"20%",
      margin:0,
    },
    mobileHeader:{
      display:'none'
    },
  },
  '@media (min-width: 768px) and (max-width: 991px)': {
    insideRight:{
      width:'62%',
      marginRight:'80px',
      fontSize:'16px'
    },
    insideLeft:{
      fontSize:'16px'
    },
    mobileHeader:{
      display:'none'
    },
   },
   '@media (max-width:767px)':{
        headerLeft:{
          display:'none'
        },
        headerRight:{
          display:'none'
        },
        mobileHeader:{
          display:"flex",
          flex:1,
          justifyContent:'space-between',
          padding:'0 2%',
          alignItems:"center",
          textDecoration:"none",
          color:'#000',
        },
        mobileHeadline:{
           '&:active':{
              color:'#FF0033',
              fontWeight:'bold'
             },
           '&:hover':{
              cursor:'pointer'
             }
           },
        container:{
            boxShadow:'none',
          },
      }

}
class Header extends Component{
  static contextTypes = {
    router: () => true, 
  }
  render(){
    const classes=this.props.classes;
    return(
      <div className={classes.container}>
        <Link to="/" className={classes.mobileHeader}>
          <Typography variant="body2" className={classes.mobileHeadline}> My Awesome Shop</Typography>
         <MenuList/>
         </Link>
        <Link to="/" className={classes.headerLeft}>
           <Typography variant="body2">MY AWESOME SHOP</Typography>
        </Link>
        <div className={classes.headerRight}>
          <ol className={classes.insideRight}>
            <Link className={classes.nav} to="/"><li>HOME</li></Link>
            <Link className={classes.nav} to="#"><li>ABOUT</li></Link>
            <Link className={classes.nav} to="#"><li>CONTACT</li></Link>
              <Link className={classes.nav} to="#"><li>BAG</li></Link>
          </ol>
        </div>
      </div>
    );
  }
}
export default injectSheet(styles)(Header)
