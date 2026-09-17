import { defineStore } from "pinia";

export const cartStore = defineStore("carts", {
  state: () =>({
    // 這邊定義所有變數與資料
    products:[
      {id:1, name: '蘋果', quantity:1, price:30, stocks:100},
      {id:2, name: '香蕉', quantity:1, price:20, stocks:100},
      {id:3, name: '草莓', quantity:1, price:50, stocks:0},
      {id:4, name: '水蜜桃', quantity:1, price:80, stocks:0},
    ],
    carts:[]
  }),
  getters: { //預設取得資料的函式集
    showStocks(state) {
      console.log(state)
      //回傳無庫存的水果
      return state.products.filter((product) => product.stocks === 0)
    },
    totalPrice(state) {
      let total = 0;
      state.carts.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    }
  },
  actions: {
    // 設定要做的功能函式，例如加入購物車(addToCart)、移除購物車(removeToCart)
    addToCart(item){
      console.log(item)
      this.carts.push(item)
    },
    removeToCart(index){
      this.carts.splice(index, 1);
    }
  }
})