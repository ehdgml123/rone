import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import store, {changeName, increase} from './store.js'
import { addCount, decreaseCount, deleteItem, sortName } from "../components/store";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../Cart.css'



function Cart() {
  let state = useSelector((state) => state);
  // console.log(state.cart[0].name);

  // dispatch는  store.js 로 요청보내주는 함수
  let dispatch = useDispatch();

  const smallProdcuctStyle = {
    border: "1px solid #ddd",
    width: "100px",
    height: "80px",
    cursor: "pointer",
  };

  let textverticalAlign = {
    verticalAlign: "middle",
    textAlign: "center",
  };

  return (
    <>
      <div class="Cart_wrap">
        <div class="row">
          <div class="col-sm-12" style={{ textAlign: "center" }}>
            <h5 style={{ padding: "50px" }}>
              {state.user.name} {state.user.age}님의 장바구니🛒
            </h5>
            {/* <button onClick={()=>{ dispatch(increase())}}>나이+</button>
       <button onClick={()=>{ dispatch(increase(100))}}>나이+</button> */}
            <Button
              className="namelist"
              variant="outline-primary"
              onClick={() => {
                dispatch(sortName(state.cart.Name));
              }}
            >
              이름순정렬
            </Button>{" "}
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>상품이미지</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>변경하기</th>
                </tr>
              </thead>
              <tbody>
                {state.cart.map((a, i) => (
                  <tr key={i}>
                    <td style={textverticalAlign}>{state.cart[i].id + 1}</td>

                    <td>
                      <Link to={`/detail/${state.cart[i].id}`}>
                        <img
                          src={`img/${state.cart[i].imgurl}`}
                          style={{ width: "85px" }}
                        />
                      </Link>
                    </td>
                    <td style={textverticalAlign}>{state.cart[i].name}</td>
                    <td style={textverticalAlign}>{state.cart[i].count}</td>
                    <td style={textverticalAlign}>
                      <Button
                        onClick={() => {
                          dispatch(addCount(state.cart[i].id));
                        }}
                        variant="outline-success"
                        style={{ marginRight: "10px" }}
                      >
                        +
                      </Button>

                      <Button
                        onClick={() => {
                          dispatch(decreaseCount(state.cart[i].id));
                        }}
                        variant="outline-warning"
                        style={{ marginRight: "10px" }}
                      >
                        -
                      </Button>

                      <Button
                        onClick={() => {
                          dispatch(deleteItem(state.cart[i].id));
                        }}
                        variant="outline-danger"
                      >
                        상품삭제
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;