import React,{Component} from 'react';
import injectSheet from 'react-jss';
import { observer } from 'mobx-react';
// import {extendObservable} from 'mobx';
import Typography from '@material-ui/core/Typography';
import Bullet from '@material-ui/icons/FiberManualRecord';
import classnames from 'classnames';

const styles={
    colorList:{
        display:"flex"
    },
    option:{
        height: 30,
        padding:'0px 10px',
        border: '1px solid transparent',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 3,
        fontSize: 12,
        marginRight:10,
    },
    optionDefault:{
        extend:'option',
        '&:hover':{
            backgroundColor:"#dadada",
            cursor:'pointer'
        }
    },
    optionSelected:{
        extend:'option',
        backgroundColor:"#dadada",
        
    },
    unordered:{
        paddingLeft: 26,
        paddingRight: 15,
        display:'flex',
        alignItems:'center'
    },
    bullet:{
        fontSize:13,
        marginRight:10
    },
    
    

            
};  

const ColorSelect=observer(class ColorSelect extends Component{
    
    render(){
        const classes=this.props.classes;
        const change=this.props.change;
        const color=this.props.color;
        let type="color";
        let colorFlag=this.props.colorFlag;
        console.log("color flag",colorFlag);
        return(
            <div >
                <Typography>{color.length} color available.</Typography>
                <div className={classes.colorList}>
                    { color.map((item)=>{
                        let col=Object.values(item);
                        return(
                            <div key={Object.values(item)} className={classnames({[classes.optionSelected]:colorFlag.includes(Object.keys(item)[0])},{[classes.optionDefault]:!colorFlag.includes(Object.keys(item)[0])})}   onClick={(e)=>{change(Object.keys(item)[0],type)}}>
                                
                                <Bullet className={classes.bullet} style={{fill:col,border:'1px solid black',borderRadius:50}}/>
                                
                                <p>{Object.values(item)}</p>    
                             </div>

                            // <div key={Object.values(item)} className={classes.bulletBox}   onClick={(e)=>{change(Object.keys(item)[0],type)}}>
                                
                            //     <Bullet className={classes.bullet} style={{fill:col,border:'1px solid black',borderRadius:50}}/>
                                
                            //     <p>{Object.values(item)}</p>    
                            //  </div>
                        );
                        })
                    }
                </div>
            </div>
        );
    }
})
export default injectSheet(styles)(observer(ColorSelect));
