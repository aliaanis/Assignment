import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom'

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
    color:'#000',
    '&:hover':{
      color:'#FF0033',
      fontWeight:'bold'
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
    width: '40%',
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
      {/* <div className={classes.headerLeft}>
        <p  onClick={this.context.router.history.goBack}>MY AWESOME SHOP</p>
      </div> */}
        <Link to="/" className={classes.headerLeft}>
           <p >MY AWESOME SHOP</p>
        </Link>
        <div className={classes.headerRight}>
          <ol className={classes.insideRight}>
            <a className={classes.nav} href=""><li>HOME</li></a>
            <a className={classes.nav} href=""><li>ABOUT</li></a>
            <a className={classes.nav} href=""><li>CONTACT</li></a>
            <a className={classes.nav} href=""><li>BAG</li></a>
          </ol>
        </div>
      </div>
    );
  }
}
export default injectSheet(styles)(Header)
