<template lang="">
    <div class="mt-3">
        <h2>帳單金額</h2>
        <p>總金額: {{total}}</p>
        <p>稅金(5%): {{tax}}</p>
        <input type="text" v-model=gender>
        <p>{{name}}</p>
    </div>
</template>


<script setup>
import { ref, computed } from 'vue';

const total = ref(1000);
const tax = computed(() => total.value * 0.05);

const gender = ref('男性');
const name = computed(() => {
    if (gender.value == '男性'){
        return name.value = '先生'
    } else if (gender.value == '女性'){
        return name.value = '小姐'
    } else {
        return name.value = '請輸入性別'
    }
});
// 有大括號一定要加return



</script>


<style lang="">
    
</style>