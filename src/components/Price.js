import React,{Component} from 'react';
import injectSheet from 'react-jss';
import { observer } from 'mobx-react';
import {extendObservable} from 'mobx';
import Typography from '@material-ui/core/Typography';

const styles={
    price:{
        display:"flex",
        width:110,
        justifyprimary:"space-between",
        height:50,
        alignItems:"flex-end",
        margin:'0 !important'
     },
    markPrice:{
        textDecoration:"line-through",
        color:"grey",
        // fontWeight:"bold",
        fontSize:12
    },
    salePrice:{
        fontSize:18,
        marginBottom:-3,
        marginRight:5
    },
    discount:{
        color:"#6eb8af",
        // fontWeight:"bold",
        fontSize:12,
        display:"flex"
    },
    msg:{
        color:"grey",
        // fontWeight:"bold",
        fontSize:12
    }
};

const Price=observer(class Price extends Component{
    constructor(props){
        super(props);
        extendObservable(this,{
           
        }) 
    }
    render(){
        const primary=this.props.primary;
        const classes=this.props.classes;
        return(
            <div>
                <div className={classes.price}>
                    <Typography variant="body2" className={classes.salePrice}>{"\u20B9"}{'\u00A0'}{parseInt(primary.sale_price,10)}</Typography>
                    <Typography variant="body2" className={classes.markPrice}>{"\u20B9"}{'\u00A0'}{parseInt(primary.mark_price,10)}/></Typography>
                </div>
                <Typography variant="body2" className={classes.discount} >You save {"\u20B9"}{'\u00A0'}{parseInt(primary.mark_price-primary.sale_price,10)} 
                {'\u00A0'}({primary.sale_msg})
                </Typography>
                <Typography variant="body2" className={classes.msg}>Local taxes included(where applicable).</Typography>
            </div>
        );
    }
})
export default injectSheet(styles)(observer(Price));