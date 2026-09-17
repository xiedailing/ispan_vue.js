
<script setup>
import { cartStore } from '../stores/cart_store'
import { storeToRefs } from 'pinia';

const myCart = cartStore()

//變數在寫語法時候的別名，簡短呼叫的程式(可不寫)
const { products, carts} = storeToRefs(myCart)

</script>

<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-8">
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in products"> 
            <span>{{item.name}}- 一斤{{item.price}}元</span>
            <div class="w-50 text-end">
              <button class="btn btn-primary me-3" @click="myCart.addToCart(item)" v-if="item.stocks > 0">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <button class="btn btn-primary me-3" disabled v-else>
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </li>
        </ul>
        <p v-for="stock in myCart.showStocks">無庫存: {{ stock.name }}</p>
      </div>
      <div class="col-12">        
        <h1>我的購物車</h1>
        <h2 v-if="carts.length == 0">目前無商品</h2>
        <form action="" @submit.prevent="" v-else>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(cart_item, i) in carts" > 
              <div class="w-75 d-flex justify-content-between align-items-center">
                <span class="w-75">{{cart_item.name}}</span>
                <input type="number" class="form-control" value="1" v-model="cart_item.quantity">
                <span>小計: {{cart_item.price * cart_item.quantity}}</span>
              </div>
              
              <div class="w-25 text-end">
                <button class="btn btn-secondary me-3" @click="myCart.removeToCart(i)">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-end">
              <h3>總金額: $NT {{myCart.totalPrice}}元</h3>
            </li>
            <li class="list-group-item d-flex justify-content-end">
              <button type="submit" class="btn btn-info" >我要結帳</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
    
  </div>
</template>


<style scoped>
.form-control{
  width: 80px;
}
</style>