import React, { useState } from "react";
import { Chip , Card , CardMedia, CardContent,Typography,Tooltip } from "@mui/material";
// import DemoLinkImage from "../../assets/demo.png"
import Styles from "./card.module.css"

function Cart({cartData ,type}){
    //console.log(cartData.follows)
     const getCart = (type)=>{
         switch (type){
             case "album":{
  console.log(cartData)
            
     
    return (
        <Tooltip title={`${cartData.songs.length} songs`} placement='top' arrow>
        <div className={Styles.wrapper}>
            <div className={Styles.card}>
                <img src={cartData.image} alt="album cover" />
                <div className={Styles.banner}>
                    <Chip className={Styles.chip} label={`${cartData.follows} Follows`} size="small" />
                </div>
            </div>
            <div className={Styles.titleWrapper}>
                <p>{cartData.title}</p>
            </div>
        </div>
     </Tooltip>
       
    )
}
 case "song" : {
    return (<div className={Styles.wrapper}>
        <div className={Styles.card}>
            <img src={cartData.image} alt="song cover" />
            <div className={Styles.banner}>
                <Chip className={Styles.chip} label={`${cartData.likes} Likes`} size="small" />
            </div>
        </div>
        <div className={Styles.titleWrapper}>
            <p>{cartData.title}</p>
        </div>
    </div>)
 }
 default : <></>
 }
 } 
 return getCart(type)
 }

export default Cart