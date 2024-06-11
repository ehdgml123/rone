import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import '../Detail.css';

function FillExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="상세정보">
      <div className='footimg'>
        <img src='/img/detfoot.webp'/>
        <img src='/img/detfoot1.webp'/>
        <img src='/img/detfootimg2.webp'/>
      </div>
      </Tab>
      <Tab eventKey="profile" title="구매평">
        <div className="detail_review_wrap">
          <div className='text-bold_prod'>
            <p className='text_bole'>구매평</p>
            <span className='braket'>(0)</span>
          </div>
        </div>

        <div className='review_wrap'>
        <Button variant="dark" style={{width:'190px', height:"80px", fontSize:"25px"}}>구매평작성</Button>
           <div className='review_top'>
               <div className='inline'>포토 구매평만 보기</div>
           </div>

        </div>
      </Tab>
      <Tab eventKey="longer-tab" title="Q&A">

      </Tab>
    </Tabs>
  );
}

export default FillExample;