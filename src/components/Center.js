import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Button from '@material-ui/core/Button';
// import Frames from './Frames';
import Frames from './Frames';
import Typography from '@material-ui/core/Typography';
const styles={
    container:{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    content:{
        display:'flex',
        flexDirection:'row',
        border:'2px solid green', 
        margin:'2.5% 19%',
        height:'80%',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
};
class Center extends Component{
    render(){
        const classes=this.props.classes;
        let arr=this.props.arr;
        console.log(arr.length);
        return(
            <div className={classes.container}>
            <div className={classes.content}>
                {this.props.arr.length>0 && this.props.arr.map(item=>
                <Frames key={item.id} item={item} />
                )
                }
                
            </div>
            <Button variant="outlined" className={classes.button}>
                Load More
            </Button>
        </div>
        );

    }
}
export default injectSheet(styles)(Center);