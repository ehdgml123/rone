import '../Detail.css';
import React, { useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../db/langue';
import IncDecCounter from "../components/IncDecCounter";
import FillExample from '../components/FillExample';
import Button from 'react-bootstrap/Button';


//장바구니
import { useDispatch } from 'react-redux'
import { addItem } from './store';

function Detail(props) {
    let { id } = useParams();
let [langue] = useState(data);

// 장바구니
let selproduct = props.langue.find((x) => x.id == id); 
let dispatch = useDispatch();

    return (
        <div className='sub_main'>
          <div className="sub_left">
        <div className='smallimgbox'>
        <img src={selproduct.product_img} alt='' />
        </div>
    </div>

    <div className='show_goods'>
    {selproduct.SubImgDetail_set.map((detail, index) => (
            <img key={index} src={detail.imgDetail} alt={`Detail ${index + 1}`} />
        ))}
    </div>

    <div className='box_ti'>
            <h1>{selproduct.title}</h1>
            <p>{selproduct.price}</p>
        </div>

        <div className='copbox'>
           <div className='coptext'>
              <span className='tw-text'>쿠폰 사용시</span>
              <span className='cout-text'>0원</span>
            </div>  

            <div className='coupimg'>
                <span className='co-text'>쿠폰받기</span>
            </div>    
        </div>

        <div className='content'>
             <span className='content-text' >{selproduct.content}</span>
        </div>

    <div className='sub_right2'>
        <h1 className='bey'>구매혜택</h1>
        <span className='point'>540 적립금 적립예정</span>
        <h1 className='car'>배송 방법</h1>
        <span className='car2'>택배</span>
        <h1 className='car3'>배송비</h1>
        <span className='car4'>3,500원(30,000원 이상무료배송)ㅣ 도서산간 베송비 추가</span>
        <h1 className='car5'>배송안내</h1>
        <span className='car6'>기본 3,500원</span>
    </div>

    <div className='opt_block'>
         <div className='coun'>
               <span className='coun_text'>수량</span>
         </div>

         <div className='count'>
         <IncDecCounter />

         <span className='area_price'>
            0원</span>
         </div>
    
    </div>

    <div className='no-ma'>
        <span className='total-amount'>총 삼풍금액(0개)</span>
        <span className='total_con'>0원</span>
    </div>

    <div className='buy_btns'>
       <a>
       <Button className='cash' 
       variant="dark"
       onClick={() => {
        

      dispatch(
          addItem({
          id: selproduct.id,
          name: selproduct.title,
          imgurl: selproduct.product_img.replace("img/", ""),
          count: 1,
          })
      );
      }}
       >구매하기</Button>
       </a>
       
       <Link to="/Cart" >
       <Button variant="light"
       className='car_lig'
       >장바구니</Button>{' '}
       </Link>

    </div>
    
       <div className='naver'>
      <img src='/img/naver.png' style={{width:"650px", height:"100px"}} />
      
      <div className='nav_wlq'>
      <span className='Wla'>찜</span>
      </div>
       </div>

       <FillExample />
    

        </div>
    );
}

export default Detail;
