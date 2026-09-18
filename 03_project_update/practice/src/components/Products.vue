<template>
    <div class="cart">
        <h1 class="py-5">Shopping Cart</h1>
        <div class="row">
            <div class="col-md-3" v-for="item in cartStore.items" :key="item.id">
                <div class="card mb-4">
                    <img :src="item.image" class="card-img-top" alt="Product Image">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text">{{ item.description }}</p>
                        <p class="card-text">{{ item.price }}</p>
                        <button class="btn btn-primary" @click="handleAddToCart(item)">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Bootstrap Modal -->
    <div class="modal fade" :class="{ show: showModal }" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-modal="true" :style="{ display: showModal ? 'block' : 'none' }">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="successModalLabel">成功加入購物車</h5>
                    <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{ modalMessage }}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">關閉</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '../store/cartStore';
const cartStore = useCartStore();
const modalMessage = ref('');
const showModal = ref(false);

const handleAddToCart = (item) => {
    cartStore.addToCart(item);
    modalMessage.value = `${item.name} 已成功加入購物車！`;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
</script>

<style scoped>
.cart {
    padding: 20px;
    border: 1px solid #ccc;
}
</style>