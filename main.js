var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './img/green-socks.jpg',
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './img/green-socks.jpg',
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: './img/blue-socks.jpg',
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            this.cart -= 1
        }
    }
})