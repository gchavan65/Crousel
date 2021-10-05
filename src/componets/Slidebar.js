import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Data} from '../componets/Constant.js'
import {makeStyles } from '@material-ui/core'
const useStyles = makeStyles(theme=>({
    banner:{
   
        width:'50%',
        margin:"150px 350px",
     
   },
   imges:{
    width:'100%',
    marginTop:'30px',
    height:'280px',
    [theme.breakpoints.down('sm')]:{
        objectFit:'cover',
        height:180,
        
   }}

}))

const Slidebar = () => {
  const  classes = useStyles();
    return (
        <>
         <Carousel  className={classes.banner}
            autoPlay={true}
            animation='slide'
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style:{
                    background:'white',
                    color:'#494949',
                    borderRadius:'0px',
                    margin:0
                }
            }}>
{
    Data.map(val=>{
        return(
            <img src={val.url} alt='no img' className={classes.imges}/>
        )
    })
}
        </Carousel>
        </>
    )
}

export default Slidebar
