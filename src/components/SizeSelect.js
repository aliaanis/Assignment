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
    option:{
        margin:2,
        color:'#666565',
        width: 30,
        border: '1px solid #dadada',
        height: 23,
        borderRadius: 3,
        fontSize:10,
        cursor:"pointer",
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
    },

    optionDefault:{
        extend:'option',
        backgroundColor:'#fff',
        '&:hover':{
            backgroundColor:"#d9d9d9"
        },
        
    },
    optionSelected:{
        extend:'option',
        backgroundColor:'#d9d9d9',
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
                        <div key={Object.values(item)} className={classnames({[classes.optionSelected]:sizeFlag.includes(Object.keys(item)[0])},{[classes.optionDefault]:!sizeFlag.includes(Object.keys(item)[0])})} onClick={(e)=>{change(Object.keys(item)[0],type)}}>
                          {Object.values(item)}
                        </div>
                    )}
                </div>
        </div>
        );
    }
})
export default injectSheet(styles)(observer(SizeSelect));
