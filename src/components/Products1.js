import React from "react";
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Products1 = (props) => {
    let navigate = useNavigate();

    return(
         <div className="main_itembox1" >
            <Nav.Link  onClick={() => {navigate('/detail1/'+ props.i) }} className="c1">
                <img src={props.langue1.product_img}  width="765px" />
                <h4 className="latitle" style={{fontSize:"30px", marginTop:"20px"}}>{props.langue1.title}</h4>
                 <p className="laprice" style={{fontSize:"30px"}}>{props.langue1.price}</p>
            </Nav.Link>
         </div>

    )
}

export default Products1;