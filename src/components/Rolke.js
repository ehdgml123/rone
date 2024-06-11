import React from "react";
import data2 from '../db/langue1';
import { useState } from 'react';
import Products1 from '../components/Products1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

//scrollbar
import '../style.css'


const Rolke = () => {
 let [langue1] = useState(data2);
    
    return(
        <>
          <div className="con" >
             <h1 style={{fontWeight:"bold"}}>촉촉하고 부드러운 프리미엄 롤케이크</h1>
                <div className="ros" >
                <Swiper
                className="woman"
                slidesPerView={3}
                spaceBetween={6}
                scrollbar={{}}
                modules={[Scrollbar]}
                loop={true}
               
            >
                  {
                    langue1.slice(0,6).map((ele, i) => {
                      return (
                        <SwiperSlide key={ele.id+1}>
                        <Products1 langue1={ele} i={i+1} key={ele.id} />
                        </SwiperSlide>
                      )
                    })
                  }
                  </Swiper>
                </div>
              </div>
        </>
    )
     
}



export default Rolke;