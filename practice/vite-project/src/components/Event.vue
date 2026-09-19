<template lang="">
<div class="box mb-3" :style="{background: bgc}"></div>
<div class="box mb-3" :style="{ background: box2Color }" @mouseenter="changeBox2Color('brown')" @mouseleave="changeBox2Color('navy')"></div>
<button @click.right="changeColor()">改變顏色</button>

<input type="text" class="form-control mb-3" v-model="msg" @keyup.enter="changeTextColor()">
<p class="fw-bold mb-3" :style="{color: textColor}"> {{msg}} </p>
</template>


<script setup>
import { ref } from 'vue'

const bgc = ref("thistle");
const msg = ref("");
const textColor = ref("#000");
const box2Color = ref("navy")

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

const changeBox2Color = (color) => {
    box2Color.value = color
};

</script>


<style scoped>
    .box {
        width: 100px;
        height: 100px;
    }
</style>