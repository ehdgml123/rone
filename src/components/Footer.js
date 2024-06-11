import React from "react";
import { Col, Row, Nav } from "react-bootstrap";


const Footer =() => {

    return(
        <>
          <Row className="footer_wrap">
                <Col>
                   <Nav className="nav_footer">
                      <Nav.Link
                    to = {"#"}
                      >이용약관</Nav.Link>
                   
                      <Nav.Link
                    to = {"#"}
                       style={{fontWeight:"bold"}}>개인정보처리방침</Nav.Link>
                   </Nav>
                </Col>
                   <Col className="text_footer">
        <span>Copyright ⓒ 2024 후앙 베이커리 All rights reserved.</span>
        </Col>
             </Row>
        </>
    )
}

export default Footer;