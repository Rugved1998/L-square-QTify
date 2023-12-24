import React from "react";
import styles from "./HomePage.module.css";
import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";
import Hero from "../../components/Hero/Hero";

function HomePage(){
const {data}= useOutletContext();
const{topAlbums, newAlbums, songs}= data;
// const checkFlag=()=>{
//     console.log("This is Section");
//     console.log(topAlbums);
// }
    return(
        <div>
           <Hero/>
           <div className={styles.wrapper}> 
                <Section title="Top Albums" data={topAlbums} type="album" />
                <Section title="New Albums" data={newAlbums} type="album" />
                {/* <Section title="Songs" data={songs} type="song" /> */}
           </div>
        </div>
    )
}

export default HomePage;