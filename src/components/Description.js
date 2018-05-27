import React,{Component} from 'react';
import injectSheet from 'react-jss';
import { observer } from 'mobx-react';
import {extendObservable} from 'mobx';
import CollapseData from '../helpers/CollapseData';
import Typography from '@material-ui/core/Typography';
const styles={};
const Description=observer(class Description extends Component{
    constructor(props){
        super(props);
        extendObservable(this,{
           
        }) 
    }
    render(){
        const primary=this.props.primary;
        
        return(
            <div>
                
                        <Typography variant="body2">{primary.name}</Typography>
                         <CollapseData str={primary.desc} />
                   
                 
            </div>
        );
    }
})
export default injectSheet(styles)(observer(Description));
