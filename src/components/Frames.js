import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';


const styles={
    frames:{
        textDecoration:'none',
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
        // fontWeight:"bold",
        // position:'relative',
        // textDecoration:'none'
    },
    link:{
        textDecoration:"none"
    }
}
class Frames extends Component{
   
    render(){
        
        const price=parseInt(this.props.item.salePrice,10);
        const classes=this.props.classes;
        return(
            <Link className={classes.frames} to={`/item/${this.props.item.id}`}>
                <div>
                <img className={classes.pic} alt="pic" src={this.props.item.image}/>
                </div>
                <div className={classes.label}>
                    <p className={classes.price} variant="body1" >{this.props.item.name}</p>
                    <Typography className={classes.price} variant="body1">{"\u20B9"}{price}</Typography>
                </div>

            </Link>
        );
    }
}
export default injectSheet(styles)(Frames);