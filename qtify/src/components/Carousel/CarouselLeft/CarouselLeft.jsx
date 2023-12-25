import React, {useEffect, useState} from 'react';
import {useSwiper} from "swiper/react";
import styles from "./CarouselLeft.module.css";
import {ReactComponent as LeftArrow} from "../../../assets/Left.svg";

function CarouselLeft(){
    const swiper= useSwiper();
    const[isBeginning,setBeginning]= useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setBeginning(swiper.isBeginning);
        })
    },[]);

    return(
        <div className={styles.LeftNavigation}>
                {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()} />}
        </div>
    )
}

export default CarouselLeft;