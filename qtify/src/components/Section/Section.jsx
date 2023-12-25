import React, {useState} from 'react';
import Card from '../Card/Card';
import styles from './Section.module.css';
import { CircularProgress } from '@mui/material';
import Carousel from '../Carousel/Carousel';

function Section({title,data,type}){
    const [carouselToggle,setCarouselToggle]=useState(true);
    // const checkFlag=(element, position)=>{
    //     console.log(position)
    //     console.log(element);
       
    // }
    const handleToggle=()=>{
        setCarouselToggle((prevState)=>!prevState);
        // checkFlag();
    }

    return(
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle?"Collapse":"Show all"}</h4>
            </div>
            {
            data.length === 0 ? (<CircularProgress/>)
            :
            (
                <div className={styles.cardWrapper}>
                    {!carouselToggle?(
                    <div className={styles.wrapper}>
                        {
                            data.map((element)=>(
                            <Card data={element} type={type} key={element.id}/>
                                     ))       
                        }

                    </div>): 
                    (
                        <Carousel data={data}  renderComponent={(data)=> (
                            
                        <Card key={data.id} data={data} type={type}/>)}
                        />
                        
                            )} 
                </div>
            )
        }
        </div>
       
    )
}

export default Section;