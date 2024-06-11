import React from "react";
import data1 from '../db/langue';
import { useState } from 'react';
import Products from '../components/Products';


const Mainpro = () => {
 let [langue] = useState(data1);
    
    return(
        <>
          <div className="cont" style={{ display: 'flex', flexDirection: 'column' }}>
             <h1 style={{fontWeight:"bold"}}>티타임에 어울리는 프랑스쿠키, 랑그드샤</h1>
                <div className="rot">
                  {
                    langue.slice(0,2).map((ele, i) => {
                      return (
                    
                        <Products langue={ele} i={i + 1} key={ele.id} />
                      )
                    })
                  }

                </div>
              </div>
        </>
    )
     
}



export default Mainpro;