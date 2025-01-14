import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/vibrating-headphone1.png";

function Hero(){
    return(<div className={styles.hero}>
        <div>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img alt="headphones" src={HeroImage}  width={112} />
        </div>
    </div>)

}

export default Hero;