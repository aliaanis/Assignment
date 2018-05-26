import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Header from '../components/Header';
import Frames from '../components/Frames';
import axios from 'axios';
import {extendObservable} from 'mobx';
import { observer } from 'mobx-react';
import {API_URL} from '../constant';
import Button from '@material-ui/core/Button';

import Foot from '../components/Foot';


const styles={
    container:{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    nav:{
        height:'7%',
        width:'100%'
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
   center:{
       width:'100%',
       height:'85%',
       display:'flex',
       flexDirection:'column',
       alignItems:'center'

   },
   button:{
       width:'10%',
       backgroundColor:'#f9f9f9',
       border:'1px solid transparent'
   },
   footer:{
       height:"7%",
       width:'100%',
   },
}
const Home=observer(class Home extends Component{
    constructor(){
        super();
        extendObservable(this,{
            arr:[],
            data:{
                page:1
            }
        })
    }
    nextPage=()=>{
        let dummy={};
        let obj={};
        this.data.page++;
        console.log(this.data.page);
        axios.get(API_URL.LISTINGS,{params:this.data})
        .then((resp)=>{
            console.log(resp.data.products);
            dummy=resp.data.products;
            for(let i=0;i<dummy.length;i++){
                obj.id=dummy[i]._id;
                obj.name=dummy[i].name;
                obj.salePrice=dummy[i].sale_price;
                obj.image=dummy[i].images[0];
                this.arr.push(obj);
             }

        })
        .catch((err)=>{
            console.log("error",err);
        })
    }
    componentDidMount(){
        let dummy={};
        let obj={};

        axios.get(API_URL.LISTINGS,{params:this.data})
        .then((resp)=>{
            dummy=resp.data.products;
            for(let i=0;i<dummy.length;i++){
                obj.id=dummy[i]._id;
                obj.name=dummy[i].name;
                obj.salePrice=dummy[i].sale_price;
                obj.image=dummy[i].images[0];
                this.arr.push(obj);
             }
            
        })
        .catch((err)=>{
            console.log("error",err);
        })
        

    }
    render(){
        const classes=this.props.classes;
        return(
            <div className={classes.container}>
                <div className={classes.nav}>
                    <Header/>
                </div>
                <div className={classes.center}>
                    <div className={classes.content}>
                        {this.arr.length>0 && this.arr.map(item=>
                        <Frames key={item.id} item={item} />
                        )
                        }
                    </div> 
                    <Button variant="outlined" className={classes.button} onClick={this.nextPage}>
                        Load More
                    </Button>
                 </div>
                 <div className={classes.footer}>
                     <Foot/>
                </div>
            </div>
        );

    }
})
export default injectSheet(styles)(observer(Home));
