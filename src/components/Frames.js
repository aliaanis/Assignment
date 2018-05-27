import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';



const styles={
    frames:{
        textDecoration:'none',
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:160,
        width:173,
        // border:'1px solid black',
        margin:13,
        '&:hover':{
            webkitTransform:'scale(1:1)',
            msTransform: 'scale(1.1)',
            transform: 'scale(1.1)',
        }
    },
    
    pic:{
        display: "inline-block",
        width: '90%',
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
        margin:0,
        color:'#000'
    },
    frameCover:{
        display:'flex',
        justifyContent:'center'
    },
    '@media (min-width: 600px) and (max-width: 767px)': {
        frames:{
            width:'194px',
            height:'180px'
        },
        price:{
            fontSize:12
        }
 
       },
       
    
}

class Frames extends Component{
   
    render(){
        
        const price=parseInt(this.props.item.salePrice,10);
        const classes=this.props.classes;
        return(
            <Link className={classes.frames} to={`/item/${this.props.item.id}`}>
                <div className={classes.frameCover} >
                    <img className={classes.pic} alt="pic" src={this.props.item.image}/>
                </div>
                <div className={classes.label}>
                    <p className={classes.price} variant="body1" >{this.props.item.name}</p>
                    <NumberFormat value={price} prefix={"\u20B9"} displayType="text" thousandSeparator={true}
                     renderText={value=><Typography variant="headline" className={classes.price}  variant="body2">{value}
                     </Typography>}  />
                </div>

            </Link>
        );
    }
}
export default injectSheet(styles)(Frames);