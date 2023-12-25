import React, {useEffect, useState} from 'react';
import {useSwiper} from "swiper/react";
import styles from "./CarouselRight.module.css";
import {ReactComponent as RightArrow} from "../../../assets/Right.svg";

function CarouselRight(){
    const swiper= useSwiper();
    const[isEnd,setEnd]= useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setEnd(swiper.isEnd);
        })
    },[]);

    return(
        <div className={styles.RightNavigation}>
                {!isEnd && <RightArrow onClick={()=>swiper.slideNext()} />}
        </div>
    )
}

export default CarouselRight;