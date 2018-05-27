import React,{Component} from 'react';
import injectSheet from 'react-jss';
import { observer } from 'mobx-react';
import {extendObservable} from 'mobx';
// import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Next from '@material-ui/icons/KeyboardArrowLeft';
import Back from '@material-ui/icons/KeyboardArrowRight';
import classnames from 'classnames';


import Img from 'react-image'

const styles={
    main:{
        position:'relative',
        // border:'1px solid black',
        flexDirection:"column",
        display:'flex',
        width: '100%',
        height: "90%",
        alignItems:"center",
        justifyContent:"space-between"

    },
    picCover:{
        height:'80%',
        // border:'1px solid black',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    pic:{
        display: "inline-block",
        width: '90%',
        height: "250px",
        margin: "5px",
        backgroundPosition: "center center",
        backgroundSize: "cover",
       
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
        top: '40%',
        bottom: 0,
        cursor:"pointer"
    },
    back:{
        extend:'arrowbuttons',
        left:'90%',
        '&:hover':{
            opacity:1
        }
    },
    
    next:{
        extend:'arrowbuttons',
        left:'0%',
        '&:hover':{
            opacity:1
        }
    },
    frame:{
        height:'50px',
        width:'90%',
        display:'flex',
        justifyContent:"space-evenly",
        paddingTop:2

    },
    smallImg:{

        borderRadius: 4,
        padding: 5,
        height:'auto',
        width:"70px",
    },

    frameImg:{
        extend:'smallImg',
        border: '1px solid #ddd',
        '&:hover':{
            webkitTransform:'scale(1:1)',
            msTransform: 'scale(1.1)',
            transform: 'scale(1.1)',
        }
    },
    selectedImg:{
        extend:'smallImg',
        border: '2px solid #000',
        
    },
    '@media (max-width: 767px)':{

    },
    '@media (max-width: 600px)':{
        pic:{
            height:'180px',
            width:"auto"
        },
        main:{
            height:'100%',
            flexDirection:'column',
            justifyContent:"space-between"
        },
        frame:{
            border:'1px solid #cacaca',
            width:'100%',
            padding:'10px 0px'

        }
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
            pos:0
        })   
    }

    render(){
        const classes=this.props.classes;
        return(
            
                <div className={classes.main}>
                    <div className={classes.picCover}>
                    <Img className={classes.pic} src={this.props.image[this.pos]} loader={<CircularProgress/>}/>
                    <div onClick={this.changeBack} >
                        <Next className={classes.next} />
                     </div>
                    <div onClick={this.changeNext}>
                        <Back className={classes.back} />
                    </div>
                    </div>
                    
                    <div className={classes.frame}>
                        {this.props.image.map((item,index)=>
                        <Img key={index} className={classnames({[classes.frameImg]:this.pos!==this.props.image.indexOf(item)},{[classes.selectedImg]:this.pos===this.props.image.indexOf(item)})}
                         alt="mobile phones" src={item} onClick={(e)=>{this.changePic(item)}} />
                        )
                        }
                    </div>
                </div>    
            
        );
    }
})
export default injectSheet(styles)(observer(Photos));
