
import { Col, Container, Row, Nav } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';

import '../header.css'


const Header = () => {
  let navigate = useNavigate();
  
  //  모달 가시성울 제어하는하기 위한 상태
  const [showModal, setShowModal] = useState(false);
  // 모달을 표시하는 함수
  const handleShowModal = () => setShowModal(true);
  
  // 모달을 닫는 함수
  const handleCloseModal = () => setShowModal(false);
 
  // 체크박스 상태 초기화
  const [isChecked, setIsChecked] = useState(false); 

  const  handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  }

  return (
    <>
      <Container fluid>
        <Row className="nav_wrap">
          <Col className="insticon">
            <img src="/img/pngegg.png" alt="Icon" />
            <div className="line"></div>
          </Col>

          <Col className="search">
            <input className="search_btn" placeholder="Search"></input>
          </Col>

          <Col className="text_table">
            <span>신규 가입시 20% 할인쿠폰 증정, 최고의 빵을 새롭고 더 즐겁게, 후앙 베이커리</span>
          </Col>
          
          <Col>
            <Nav className="nav_title">
              <Nav.Link href="#" onClick={handleShowModal}>로그인</Nav.Link>
              <Nav.Link href="#">회원가입</Nav.Link>
              <Nav.Link onClick={() => navigate("/Cart")}>장바구니</Nav.Link>
            </Nav>
            <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
          <input type="text" className="id" placeholder="아이디"  />
          <input type="text" className="password" placeholder="비밀번호"  />
          <div>
      <label className="checkbox">
        <input
          type="checkbox"
          className="box_check"
          style={{width:'50px'}}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        로그인 상태 유지
      </label>
      <p >체크박스 상태: {isChecked ? '선택됨' : '선택되지 않음'}</p>
    </div>
          <Button variant="dark" className="btn_login">로그인</Button>
          
          <div className="over_h">
            <a href="#" className="float_l">회원가입</a>
            <a href="#" className="float_r">아이디 · 비밀번호 찾기</a>
          </div>
          <Button variant="secondary" className="qlgodnjs_btn">비회원 주문배송 조회</Button>{' '}
        </Modal.Body>
        <Modal.Footer>
       
        </Modal.Footer>
      </Modal>
          </Col>
        </Row>
      </Container>

      <Row className="logo">
        <Link to="/" className="logolink">
          <img src="/img/logo.png" alt="Logo" />
        </Link>
      </Row>
    </>
  );
}

export default Header;
