import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom'


const styles={
    frames:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:160,
        width:173,
        border:'1px solid black',
        // padding:'1%'

    },
    pic:{
        display: "inline-block",
        width: '123px',
        height: "123px",
        margin: "5px",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },
    label:{
        display:'flex',
        flexDirection:'column'
    },
    price:{
        fontSize:10,
        fontWeight:"bold",
        position:'relative'
    }
}
class Frames extends Component{
   
    render(){
        
        const price=parseInt(this.props.item.salePrice,10);
        const classes=this.props.classes;
        return(
            <Link to={`/item/${this.props.item.id}`}>
            <div className={classes.frames} >
                <img className={classes.pic} alt="pic" src={this.props.item.image}/>
                <div className={classes.label}>
                    <div className={classes.price} >{this.props.item.name}</div>
                    <div className={classes.price}>{"\u20B9"}{price}</div>
                </div>

            </div> 
            </Link>
        );
    }
}
export default injectSheet(styles)(Frames);