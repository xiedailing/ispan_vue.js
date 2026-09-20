<script setup>
import { RouterView, RouterLink } from 'vue-router';

import { reactive } from 'vue';
const isActive = reactive([true, false, false, false, false, false]);
const updateActive = (index) => {
  for (let i = 0; i < 6; i++){
    isActive[i] = false;
  }
  isActive[index] = true;
}
</script>

<template>
  <div class="container my-2">
    <ul class="nav nav-pills justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link" :class="{'active': isActive[0]}" aria-current="page" to="/Test1" @click="updateActive(0)">Test1</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :class="{'active': isActive[1]}"  to="/Test2" @click="updateActive(1)">Test2</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :class="{'active': isActive[2]}" to="/Event" @click="updateActive(2)">Event</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :class="{'active': isActive[3]}" to="/Computed" @click="updateActive(3)">Computed</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :class="{'active': isActive[4]}" to="/Watch" @click="updateActive(4)">Watch</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :class="{'active': isActive[5]}" to="/Gallery" @click="updateActive(5)">Gallery</router-link>
      </li>
    </ul>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</template>
