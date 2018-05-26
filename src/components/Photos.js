import React,{Component} from 'react';
import injectSheet from 'react-jss';
import { observer } from 'mobx-react';
import {extendObservable} from 'mobx';
// import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Next from '@material-ui/icons/KeyboardArrowLeft';
import Back from '@material-ui/icons/KeyboardArrowRight';


import Img from 'react-image'

const styles={
    main:{
        border:'1px solid black',
        flexDirection:"column",
        display:'flex',
        width: '150%',
        height: "100%",
        position:"relative",
        alignItems:"center"

    },
    pic:{
        // display: "inline-block",
        // width: '100%',
        // height: "auto",
        margin: "5px",
        // backgroundPosition: "center center",
        // backgroundSize: "cover",
    },
    arrowbuttons:{
        color:"#fff",
        opacity:0.8,
        fontSize:20,
        border:'2px solid #afafaf',
        backgroundColor:'#afafaf',
        borderRadius:50,
        position: "absolute",
        display:'flex',
        top: '50%',
        bottom: 0,
        cursor:"pointer"
    },
    back:{
        extend:'arrowbuttons',
        left:'90%'
    },
    
    next:{
        extend:'arrowbuttons',
        left:'10%'
    },
    frame:{
        // border:'1px solid black',
        height:'50px',
        width:'100%',
        display:'flex',
        justifyContent:"center"

    },
    frameImg:{
        height:'auto',
        width:"70px"
    }

    
};
const Photos=observer(class Photos extends Component{
    changeNext=()=>{
        if(this.pos<this.props.image.length-1)
        ++this.pos;

    }
    changeBack=()=>{
        if(this.pos>0)
        this.pos--;
    }
    changePic=pic=>{
        let i=this.props.image.indexOf(pic);
        this.pos=i;
    }
    
    
    constructor(props){
        super(props);
        extendObservable(this,{
            response:this.props.apiRes,
            image:this.props.image,
            pos:0
        })   
    }

    render(){
        const classes=this.props.classes;
        return(
            
                <div className={classes.main}>
                    <Img className={classes.pic} src={this.props.image[this.pos]} loader={<CircularProgress/>}/>
                    <div onClick={this.changeBack} >
                        <Next className={classes.next} />
                     </div>
                    <div onClick={this.changeNext}>
                        <Back className={classes.back} />
                    </div>
                    <div className={classes.frame}>
                    {this.props.image.map((item,index)=>
                    <img key={index} className={classes.frameImg} alt="mobile phones" src={item} onClick={(e)=>{this.changePic(item)}} />
                    )

                    }
                    </div>
                </div>    
            
        );
    }
})
export default injectSheet(styles)(observer(Photos));
