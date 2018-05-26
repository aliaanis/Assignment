import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Typography from '@material-ui/core/Typography';

const styles={
    container:{
        alignSelf:'flex-end',
        justifyContent:'center',
        display:'flex',
        alignItems:'center',
        background:'#000',
        height:'100%',
        width:'100%',

    },
    footerLink:{
        color:"#fff",
        fontSize:12,
    },
    footerContainer:{
        // width:"20%",
        display:'flex',
        justifyContent:"space-evenly",
        marginRight:'20%'

    }
};
class Footer extends Component{
    render(){
        const classes=this.props.classes;
        return(
            <div className={classes.container}>
            <div className={classes.footerContainer}>
                 <Typography variant="body1" className={classes.footerLink}>About {'\u00A0'}{'\u00A0'}|{'\u00A0'}{'\u00A0'} 
                 Contact {'\u00A0'}{'\u00A0'}| {'\u00A0'}{'\u00A0'}Privacy Policy {'\u00A0'}{'\u00A0'}|
                 {'\u00A0'}{'\u00A0'} Return Policy{'\u00A0'}{'\u00A0'} </Typography>
            </div>
        </div>
        );
    }
}
export default Footer;