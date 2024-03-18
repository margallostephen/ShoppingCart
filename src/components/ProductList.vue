<template>
  <div class="p-10">
    <h1 class="text-2xl text-center font-bold">Gadget Hub Product List</h1>
    <ul class="h-full">
      <li
        v-for="product in products"
        :key="product.id"
        class="flex justify-between my-4 p-2 border rounded-md shadow-lg gap-2 flex-col sm:flex-row bg-gray-50"
      >
        <div class="flex flex-wrap gap-1 justify-center">
          <img
            :src="product.thumbnail"
            alt="Product Image"
            class="w-16 h-16 mr-4 rounded"
          />
          <div class="flex flex-col justify-between">
            <p class="font-semibold sm: text-sm">
              {{ product.title }} - ${{ product.price }}
            </p>
            <p class="sm: text-sm">Remaining Stocks: {{ product.stock }}</p>
          </div>
        </div>
        <div class="flex justify-center min-w-fit">
          <button
            @click="addToCart(product)"
            :class="{
              'bg-green-600 cursor-default': isInCart(product.id),
              'bg-blue-500 hover:bg-blue-700': !isInCart(product.id),
            }"
            class="text-white text-sm font-bold py-2 px-4 rounded transition-colors duration-300 w-fit h-fit"
          >
            <font-awesome-icon
              :icon="isInCart(product.id) ? 'check' : 'cart-plus'"
              class="mr-1"
            />
            {{ isInCart(product.id) ? "Added" : "Add to Cart" }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "ProductList",
  props: ["products", "cart"],
  components: {
    FontAwesomeIcon,
  },
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
    },
    isInCart(productId) {
      return this.cart.some((item) => item.id === productId);
    },
  },
};
</script>
