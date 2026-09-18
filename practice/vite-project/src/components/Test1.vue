<template lang="">
    <h2>Good Morning</h2>
    <p> No </p>

    <button class="btn btn-warning" type="button" @click="count++"> {{count}} </button>

    <button class="btn btn-primary">scoped Primary</button>

    <ul id="link">
        <li v-for="item in colors">
            {{ item.name }}
        </li>
    </ul>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    const count = ref(0);
    const colors = reactive([
        { name: "珊瑚橘", color: "#ff8a65" },
        { name: "蜜桃粉", color: "#ffd6e0" },
        { name: "天空藍", color: "#cfe8ff" },
        { name: "抹茶綠", color: "#d8f5d0" },
    ]);

</script>

<style scoped>
    .btn-primary {
        background-color: rgb(112, 112, 185);
    }
</style>