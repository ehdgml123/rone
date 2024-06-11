import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : { name : 'Lee'},
    reducers :{
      changeName(state){
        state.name = 'park'
      },

    //state  변경함수를   action이라고 함
      increase(state, action){
        state.age += action.payload
      }
    }
  })
  
//   increase(10)
//   increase(100)

export let { changeName, increase } = user.actions

let cart = createSlice({
    name : 'cart',
    initialState : [
      {id : 0, imgurl:'blueb.jpg', name : '산딸기 롤케이크', count : 2},
      {id : 1, imgurl:'langue.jpg', name : '랑그드샤 3입 선물세트', count : 1},
      {id : 2, imgurl:'langue1.png', name : '랑그드샤 4종(낱개판매)', count : 1}
    ],
    reducers : {
     addCount(state, action) {
        let num = state.findIndex((a) => {
          return a.id === action.payload;
      });
      console.log(num);
      state[num].count++;
    },
    decreaseCount(state, action) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      console.log(num);
      if (state[num].count > 0) {
        state[num].count--;
      } else if (state[num].count === 0) {
        alert("상품이 더 이상 없습니다.");
      }
    },
    addItem(state, action) {
      let num = state.findIndex((a) => a.id === action.payload.id);
      if (num !== -1) {
        state[num].count++;
      } else {
        state.push(action.payload);
      }
    },

    deleteItem(state, action) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state.splice(num, 1);
    },
    sortName(state, action) {
      state.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    }
  })

// addCount(1)

export let { addCount, decreaseCount, addItem, deleteItem, sortName } = cart.actions;

export default configureStore({
    reducer: {
      user: user.reducer,
      cart: cart.reducer,
    },
  });
