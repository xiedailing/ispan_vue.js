<template lang="">
<div class="box mb-3" :style="{background: bgc}"></div>
<button @click="changeColor()">改變顏色</button>

<input type="text" class="form-control mb-3" v-model="msg" @input="changeTextColor()">
<p class="fw-bold mb-3" :style="{color: textColor}"> {{msg}} </p>
</template>


<script setup>
import { ref } from 'vue'

const bgc = ref("thistle");
const msg = ref("");
const textColor = ref("#000");

function changeColor() {
    if (bgc.value === "thistle") {
        bgc.value = "yellow";
    } else {
        bgc.value = "thistle";
    }
};

function changeTextColor() {
    textColor.value = "green"
};


</script>


<style scoped>
    .box {
        width: 100px;
        height: 100px;
    }
</style>