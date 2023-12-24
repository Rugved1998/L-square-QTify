import React from "react";
import styles from "./Card.module.css";
import Tooltip from '@mui/material/Tooltip';
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";


function Card({data,type}){
    // const checkFlag=()=>{
    //     console.log("This is Section");
    //     console.log(data);
    //     console.log(type);
    // }
const getCard=(type)=>{
    // checkFlag();
   
    switch(type){
                    case "album":{
                        const { image, title, follows, slug, songs} =data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                        <Link to={`/album/${slug}`}>
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="album" loading="lazy"/>
                                    <div className={styles.banner}>
                                    <Chip label={`${follows} follows`} 
                                    size="small" 
                                    className={styles.chip} />
                                    </div>
                                </div>
                                <div className={styles.titleWrapper}>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </Link>
                    </Tooltip>
                )
        }
        case "song":{
                            const {likes, image, title} =data;
                    return (
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={image} alt="song" loading="lazy"/>
                                <div className={styles.banner}>
                                    <div className={styles.pill}>
                                        <p>{likes} Likes</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>{title}</p>
                            </div>
                        </div>
                       
                    )
        }
        default: return(<div>default </div>)
    }
    
}
return(getCard(type));

}

export default Card;
