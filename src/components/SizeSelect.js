import React,{Component} from 'react';
import injectSheet from 'react-jss';
import { observer } from 'mobx-react';
// import {extendObservable} from 'mobx';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';

const styles={
    sizeList:{
        display:"flex",
    },
    bullet:{
        margin:2,
        // backgroundColor:'#dadada',
        backgroundColor:'#fff',
        color:'#666565',
        width: 30,
        border: '1px solid #dadada',
        height: 23,
        borderRadius: 3,
        fontSize:10,
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
        cursor:"pointer",
        '&:hover':{
            backgroundColor:"#d9d9d9"
        },
        
    },
    selected:{
        margin:2,
        backgroundColor:'#d9d9d9',
        color:'#666565',
        width: 30,
        border: '1px solid #dadada',
        height: 23,
        borderRadius: 3,
        fontSize:10,
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
        cursor:"pointer",
        
        }
    
};
const SizeSelect=observer(class SizeSelect extends Component{
    render(){
        const classes=this.props.classes;
        const size=this.props.size;
        const change=this.props.change;
        let type="size";
        const sizeFlag=this.props.sizeFlag;


        return(
            <div>
                <Typography>{size.length} Memory sizes available.</Typography>
                <div className={classes.sizeList}>
                    {size.map((item)=>
                        <div key={Object.values(item)} className={classnames({[classes.selected]:sizeFlag.includes(Object.keys(item)[0])},{[classes.bullet]:!sizeFlag.includes(Object.keys(item)[0])})} onClick={(e)=>{change(Object.keys(item)[0],type)}}>
                          {Object.values(item)}
                        </div>
                    )}
                </div>
        </div>
        );
    }
})
export default injectSheet(styles)(observer(SizeSelect));
