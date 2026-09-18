import { defineStore } from "pinia";
export const useCartStore = defineStore('cart',{
    state: () => ({
        items: [
            {
                name: 'Chocolate Cake',
                description: 'Delicious chocolate cake with creamy frosting.',
                image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
                price: 'NT$450'
            },
            {
                name: 'Strawberry Cheesecake',
                description: 'Creamy cheesecake with fresh strawberries.',
                image: '/images/strawberry.jpg',
                price: 'NT$600'
            },
            {
                name: 'Macarons',
                description: 'Colorful and tasty macarons.',
                image: '/images/macaron.jpg',
                price: 'NT$300'
            },
            {
                name: 'Ice Cream',
                description: 'Refreshing ice cream in a cone.',
                image: '/images/icecream.jpg',
                price: 'NT$300'
            }
        ],
        carts: []
    }),
    actions: {
        addToCart(product) {
            this.carts.push({
                image: product.image,
                name: product.name,
                price: product.price,
                description: product.description,
                quantity: 1});
            return true;
        },
        removeFromCart(index) {
            this.carts.splice(index, 1);
        },
        increment(index) {
            this.carts[index].quantity++;
        },
        decrement(index) {
            if (this.carts[index].quantity > 1) {
                this.carts[index].quantity--;
            }
        }
    },
    getters: {
        totalItems() {
            return this.carts.length;
        }
    }
});