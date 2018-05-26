import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Header from '../components/Header';
import Frames from '../components/Frames';
import axios from 'axios';
import {extendObservable} from 'mobx';
import { observer } from 'mobx-react';
import {API_URL} from '../constant';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';
import CircularProgress from '@material-ui/core/CircularProgress';



import Foot from '../components/Foot';


const styles={
    container:{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        
    },
    containerBeforeHit:{
        extend:'container',
        overflow:'hidden',
        overflowY:'hidden',

    },
    containerAfterHit:{
        extend:'container',
        overflow:'scroll',
        overflowY:'scroll',

    },
    nav:{
        height:'7%',
        width:'100%'
    },
    content:{
        padding:'0 20%',
        // border:'1px solid black',
        display:'flex',
        flexDirection:'row',
        // margin:'2.5% 20%',
        flexWrap:'wrap',
        // justifyContent:'flex-start',
        // margin:10
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
       bottom:0,
       height:"7%",
       width:'100%',
   },
   loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
},
}
const Home=observer(class Home extends Component{
    constructor(){
        super();
        extendObservable(this,{
            arr:[],
            loaded:false,
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
                console.log("array",this.arr.length);
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
                this.loaded=true;
             }
             

            
        })
        .catch((err)=>{
            console.log("error",err);
        })
        

    }
    render(){
        const classes=this.props.classes;
        return(
            <div className={classnames({[classes.containerBeforeHit]:this.arr.length<=10},{[classes.containerAfterHit]:this.arr.length>10})}>
                <div className={classes.nav}>
                    <Header/>
                </div>
                {this.loaded?
                    <div className={classes.center}>
                        <div className={classes.content}>
                            {this.arr.length>0 && this.arr.map(item=>
                            <Frames key={item.id} item={item} />
                            )
                            }
                        </div> 
                       {this.arr.length%10==0? <Button variant="outlined" className={classes.button} onClick={this.nextPage}>
                            Load More
                        </Button>:null}
                    </div>:<CircularProgress className={classes.loader}/>}
                 {/* <div className={classes.footer}>
                     <Foot/>
                </div> */}
            </div>
        );

    }
})
export default injectSheet(styles)(observer(Home));
