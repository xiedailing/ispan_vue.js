<template>
    <div>
        <h1>BMI Calculator</h1>
        <!-- Add your template code here -->
        <form @submit.prevent="calculateBMI">
            <div class="mb-3">
                <label for="height" class="form-label">身高 (cm)</label>
                <input type="number" class="form-control" id="height" v-model="height">
            </div>
            <div class="mb-3">
                <label for="weight" class="form-label">體重 (kg)</label>
                <input type="number" class="form-control" id="weight" v-model="weight">
            </div>

            <div class="alert alert-secondary" role="alert">
                你的 BMI 為: {{ result }}
            </div>
        </form>
    </div>
</template>

<script setup>
import {ref, computed} from 'vue'
const height = ref(1);
const weight = ref(1);
const bmi_result = ref('');
const bmi = computed(() => {
    if( height.value > 0 && weight.value > 0) {
        return (weight.value / Math.pow(height.value / 100, 2)).toFixed(2);
    }
    return 0;
})
const result = computed(() => {
    let bgColor = '';
    if (bmi.value < 18.5) {
        bgColor = 'lightblue'; // 體重過輕的背景顏色
        return bmi.value + ' 體重過輕';
    } else if (bmi.value < 24) {
        bgColor = 'lightgreen'; // 正常範圍的背景顏色
        return bmi.value + ' 正常範圍';
    } else {
        bgColor = 'lightcoral'; // 體重過重的背景顏色
        return bmi.value + ' 體重過重';
    }
    document.body.style.backgroundColor = bgColor;
    console.log(bgColor)
})

</script>

<style scoped>
/* Add your component styles here */
</style>
