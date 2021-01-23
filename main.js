Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">

        <div class="product-image">
            <img :src="image" />
        </div>

        <div class="product-info">
            <h1>{{ brand }} {{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>

            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div v-for="(variant, index) in variants"
                 :key="variant.variantId"
                 class="color-box"
                 :style="{ backgroundColor: variant.variantColor }"
                 @mouseover="updateProduct(index)">

            </div>

            <button v-on:click="addToCart"
                    :disabled="inStock"
                    :class="{ disabledButton: !inStock }">Add to cart</button>
            <button @click="removeFromCart">Remove from cart</button>


        </div>

    </div>
    `,
    data() {
        return {
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
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

        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart')
        },
        updateProduct(index) {            this.selectedVariant = index
            console.log(index);
        },
        removeFromCart() {
            this.cart -= 1
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }

})

var app = new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: 0

    },
    method: {
        updateCart() {
            this.cart += 1
        },
    },

})