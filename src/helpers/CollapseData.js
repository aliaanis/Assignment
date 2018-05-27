import React,{Component} from 'react';
import Collapse from '@material-ui/core/Collapse';
import { Typography } from '@material-ui/core';
import injectSheet from 'react-jss';

const styles={
    more:{
        color:"#6eb8af",
        fontWeight:"bold",
        fontSize:12,
        '&:hover':{
            cursor:"pointer"
        }
    },
    txt:{
        fontSize:12
    }
}
class CollapseData extends Component{
    toggle=()=>{
        this.setState((prevState)=>({
            checked: !prevState.checked
          
        }))
    }
    constructor(props){
        super(props);
        this.state={
            checked:false
        }
    }
    render(){
        let desc=String(this.props.str);
        let pos=desc.indexOf(".");
        desc=desc.slice(0,pos+1);
        console.log(pos,this.props.str.length);
        let detailPart=this.props.str.slice(pos+1,this.props.str.length);
        let msg=this.state.checked?"-LESS":"+MORE";
        const classes=this.props.classes;
        
          return(
            <div>
                <Typography className={classes.txt} variant="body2">{desc}</Typography>
                {!msg?<Typography className={classes.more} onClick={this.toggle}>{msg}</Typography>:
                <div>
                    <Collapse in={this.state.checked}>
                         <Typography variant="body2" className={classes.txt}>{detailPart}</Typography>
                    </Collapse>
                <Typography className={classes.more} onClick={this.toggle}>{msg}</Typography>
                </div>
                }
                
                

            </div>
        );
    }
}
export default injectSheet(styles)(CollapseData);