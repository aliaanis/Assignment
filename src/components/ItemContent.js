import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { observer } from 'mobx-react';
import {extendObservable} from 'mobx';
// import Typography from '@material-ui/core/Typography';
import Description from './Description';
import ColorSelect  from './ColorSelect';
import Price from './Price';
import SizeSelect from './SizeSelect';
import QuantityButton from './QuantityButton';
// import Snackbar from '@material-ui/core/Snackbar';

const styles={
    container:{
        paddingLeft:10
    },
    
};

const Itemprimary=observer(class Itemprimary extends Component{
    add=()=>{
        this.count=this.count+1;
    }
    subtract=()=>{
        if(this.count===0){
            this.count=0;
        }
        else{
            this.count=this.count-1;
        }
        
    }
    constructor(props){
        super(props);
        extendObservable(this,{
            primary:{desc:"",name:"",sale_msg:"",sale_price:"",mark_price:"",sign:[],image:[]},
            response:this.props.apiRes,
            color:"",
            size:"",
            count:0,
            current:this.props.apiRes.selected_option_ids,
            

            
        })    
        
    }
    componentWillMount(){
        // let id=this.id; 
        this.size=[];
        let dummy=this.response.primary_product;
        let obj={};
        this.color=[];
        this.primary.desc=dummy.desc;
            this.response.product_variations.map((item)=>{
                if(this.current.includes(item.sign[0])&& this.current.includes(item.sign[1])){
                    this.primary.sale_price=item.sale_price;
                    this.primary.mark_price=item.mark_price;
                    this.primary.name=item.name;
                    this.primary.sale_msg=item.sale_msg;
                    this.primary.sign=item.sign;
                    this.primary.image=item.images;    
                    this.props.changeImage(this.primary.image);
                    

                }
                
            })
            
            
            let colorId=this.response.attributes[1]._id;
            let sizeId=this.response.attributes[0]._id;
            this.response.options.map((item)=>{
                obj={};
            if(colorId===item.attrib_id){
                obj[item._id]=item.name;
                this.color.push(obj);
            }
            if(sizeId===item.attrib_id){
                obj[item._id]=item.name;
                this.size.push(obj);
            }
            })
        

    }   
    change=(val,type)=>{
        let x=this.response.product_variations;
        if(type==="color"){
            this.current[1]=val;
            
        }
        else if(type==="size"){
            this.current[0]=val;
            

        }
        
       

        for(let i=0;i<x.length;i++){
           if((this.current.includes(x[i].sign[0])) && (this.current.includes(x[i].sign[1]))){
            this.primary.sale_price=x[i].sale_price;
            this.primary.mark_price=x[i].mark_price;
            this.primary.name=x[i].name;
            this.primary.sale_msg=x[i].sale_msg;
            this.primary.sign=x[i].sign;      
            this.primary.image=x[i].images;    
            this.props.changeImage(this.primary.image);
         }
          
        }
        // if(flag==0){
        //     console.log("flag",flag);
        //     window.alert("Sorry, this variation is not available");
        // }
          

    }
   
    render(){
        const classes=this.props.classes;
        return(
            <div className={classes.container}>
               
                    <Description primary={this.primary} loaded={this.loaded}/>
                    <hr/>
                    <Price primary={this.primary}/>
                    <hr/>
                    <ColorSelect color={this.color} change={this.change} colorFlag={this.current}/>
                    <SizeSelect size={this.size} change={this.change} sizeFlag={this.current}/>
                    <QuantityButton count={this.count} add={this.add}
                    subtract={this.subtract}/>
                   
            </div>
        
            
        );
    }
})
export default injectSheet(styles)(observer(Itemprimary));
