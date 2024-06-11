import Col from 'react-bootstrap/Col';
import Contain from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import '../Grid.css';



const Grid = () => {

  const handleMouseOver = (e) => {
    e.target.style.opacity = 0.5;
};

const handleMouseOut = (e) => {
    e.target.style.opacity = 1;
};
  
   return(
    
    <Contain className='fridmain'>
      <Row className='fr'>
        <Col xs={8} md={4}>
          <Image src="/img/grid1.png" rounded onMouseOver={handleMouseOver}  onMouseOut={handleMouseOut} />
        </Col>
        <Col xs={8} md={4}>
          <Image src="/img/grid2.png" rounded  onMouseOver={handleMouseOver}  onMouseOut={handleMouseOut}/>
        </Col>
        <Col xs={8} md={4}>
          <Image src="/img/grid3.png" rounded onMouseOver={handleMouseOver}  onMouseOut={handleMouseOut}/>
        </Col>
        <Col xs={8} md={4}>
          <Image src="/img/grid4.png" rounded onMouseOver={handleMouseOver}  onMouseOut={handleMouseOut}/>
        </Col>
        <Col xs={8} md={4}>
          <Image src="/img/grid5.png" rounded onMouseOver={handleMouseOver}  onMouseOut={handleMouseOut}/>
        </Col>
        <Col xs={8} md={4}>
          <Image src="/img/grid6.png" rounded onMouseOver={handleMouseOver}  onMouseOut={handleMouseOut}/>
        </Col>
        <Col xs={8} md={4}>
          <Image src="/img/grid7.png" rounded onMouseOver={handleMouseOver}  onMouseOut={handleMouseOut} />
        </Col>
        <Col xs={8} md={4}>
          <Image src="/img/grid8.png" rounded onMouseOver={handleMouseOver}  onMouseOut={handleMouseOut}/>
        </Col>
      </Row>
      
    </Contain>
   )

}

export default Grid;