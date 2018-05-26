import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Typography from '@material-ui/core/Typography';

const styles={
    container:{
        position:'static',
        backgroundColor:'#000',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%'
    },
     subcontainer:{
        marginRight:'20% '      
       },
       text:{
           fontSize:12,
           color:'#fff'
       }
};

class Foot extends Component{
    render(){
        const classes=this.props.classes;
        return(
            <div className={classes.container}>
                <div className={classes.subcontainer}>
                     <Typography variant="body1" className={classes.text}>About{'\u00A0'}{'\u00A0'}|{'\u00A0'}{'\u00A0'}Contact{'\u00A0'}{'\u00A0'}|{'\u00A0'}{'\u00A0'}Privacy Policy{'\u00A0'}{'\u00A0'}|{'\u00A0'}{'\u00A0'}Return Policy{'\u00A0'}{'\u00A0'}</Typography>
                </div>
            </div>
        );

    }
}
export default injectSheet(styles)(Foot);