import React from "react";
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Products = (props) => {
    let navigate = useNavigate();

    return(
         <div className="main_itembox"  style={{  display: "inline-block" }}>
            <Nav.Link  onClick={() => {navigate('/detail/'+ props.i) }} className="c1">
                <img src={props.langue.product_img} style={{width:"1170px"}} />
                <h4 className="latitle" style={{fontSize:"30px", marginTop:"20px"}}>{props.langue.title}</h4>
                 <p className="laprice" style={{fontSize:"30px"}}>{props.langue.price}</p>
            </Nav.Link>
         </div>

    )
}

export default Products;