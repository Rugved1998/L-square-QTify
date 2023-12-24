// import Swiper core and required modules
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Carousel.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


function Carousel({data, renderComponent}){
    return(
       <div className={styles.wrapper}>
         <Swiper
      // install Swiper modules
      style={{padding:"0px 20px"}}
      initialSlide={0}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={"auto"}
      allowTouchMove
    >
    {data.map((element)=>{
     <SwiperSlide>{renderComponent(element)}</SwiperSlide>   
    })}
      
    </Swiper>
       </div>
    );
}

export default Carousel;