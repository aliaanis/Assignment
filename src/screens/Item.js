import React, { Component } from 'react';
import Header from '../components/Header';
import injectSheet from 'react-jss';
import {extendObservable} from 'mobx';
import { observer } from 'mobx-react';
import ItemContent from '../components/ItemContent';
import Photos from '../components/Photos';
import axios from 'axios';
import {API_URL} from '../constant';
import CircularProgress from '@material-ui/core/CircularProgress';
import classnames from 'classnames';
import Foot from '../components/Foot';
import { truncateSync } from 'fs';

const styles={
    container:{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        overflow:'hidden'
       
       
        
    },
    
    nav:{
        height:'7%'
    },
    screen:{
        overflowY:'scroll',
        overflowX:'hidden',
        height:'100%',
        margin:'10px'

    },
    primary:{
        display:'flex',
        flexDirection:'row',
        // border:'2px solid green', 
        margin:'2.5% 19%',
        height:'80%',
        flexWrap:'wrap',
        justifyprimary:'space-between'
    },
    imagePart:{
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },
    detailPart:{
        display:"flex",
        flex:1
    },
    loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
    },
    footer:{
        height:"7%",
        width:'100%',
    },
    err:{
        display:'flex',
        alignItems:'center',
        height:'10%',
        fontSize:20,
        backgroundColor:'#ff7272',
        color:'#fff',
        '& $p':{
            marginLeft:'10%'
        }

    }
};

const Item=observer(class Item extends Component{
    constructor(props){
        super(props);
        extendObservable(this,{

            apiRes:{},
            loaded:false,
            id:this.props.match.params.id,
            image:[],
            err:false
        })   
    }
    componentWillMount(){
        let id=this.id;
        axios.get(API_URL.LISTINGS  + `/${id}`)
        .then((resp)=>{
        this.apiRes=resp.data;
        this.loaded=true;           
         }
        )
        .catch((err)=>{
            console.log(err);
            this.loaded=true;
            this.err=err;
        })

    } 
    changeImage=data=>{
        this.image=data;
    }
    

    
    render(){
        const classes=this.props.classes;
        return(
            <div className={classes.container}>
             {this.err?<div className={classes.err}><p>Oops! Something went wrong.</p></div>:

                    <div className={classes.container}>
                        <div className={classes.nav}>
                            <Header/>
                        </div>
                        { this.loaded?
                        <div className={classes.screen}>
                            <div className={classes.primary}>
                                <div className={classes.imagePart}>
                                    <Photos apiRes={this.apiRes} image={this.image} />
                                </div>
                                <div className={classes.detailPart}>
                                    <ItemContent apiRes={this.apiRes} changeImage={this.changeImage}/>
                                </div>
                            </div>
                        </div > :
                        <CircularProgress className={classes.loader}/>  
                          }

                        <div className={classes.footer}>
                            <Foot/>
                        </div>
                    </div>
             }
                
            </div>

        );
    }
})
export default injectSheet(styles)(observer(Item));