import React,{Component} from 'react';
import injectSheet from 'react-jss';
import { observer } from 'mobx-react';
// import {extendObservable} from 'mobx';
import { Typography } from '@material-ui/core';

const styles={
    container:{
        display:'flex',
        flexDirection:"column",
        height:100
    },
    plus:{
        cursor:'pointer',
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        border: '1px #2eada2 solid',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '4px',
        borderTopLeftRadius: '4px',
        color:'#2eada2',
        fontSize:17,
        width:24

    },
    minus:{
        cursor:'pointer',

        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        border: '1px #2eada2 solid',
        backgroundColor: '#fff',
        borderBottomRightRadius: '4px',
        borderTopRightRadius: '4px',
        color:'#2eada2',
        fontSize:17,
        width:24
    },
    counter:{
        width: '20px',
        height: '20px',
        border:' 1px solid #2eada2',
        backgroundColor: '#2eada2',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submit:{
        borderColor: '#2eada2',
        backgroundColor: '#2eada2',
        height: '30px',
        width: '250px',
        display: 'block',
        borderRadius: '4px',
        boxShadow: 'none',
        fontSize: '11px',
        color: 'white'
    },
    counterBtn:{
        display:'flex'
    },
    buttons:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
    
    
};
const QuantityButton=observer(class QuantityButton extends Component{
    render(){
        const classes=this.props.classes;
        const count=this.props.count;
        return(
            <div className={classes.container}>
                <Typography>Quantity</Typography>
                <div className={classes.buttons}>
                    <div className={classes.counterBtn}>
                        <div className={classes.plus} onClick={this.props.subtract}>-</div>
                         <div className={classes.counter}>{count}</div>
                        <div className={classes.minus} onClick={this.props.add}>+</div>
                    </div>
                    <button className={classes.submit}>Add to cart </button>
                </div>
           </div>
        );
    }
})
export default injectSheet(styles)(observer(QuantityButton));
