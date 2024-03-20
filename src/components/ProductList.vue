<template>
  <div>
    <header
      id="header"
      class="sticky top-0 left-0 w-full bg-cviolet text-white py-6 transition-transform duration-300 transform z-10"
    >
      <div class="container text-2xl px-8 flex align-middle gap-2">
        <font-awesome-icon icon="shopping-bag" class="mt-1" />
        <h1 class="font-bold">Gadget Hub</h1>
      </div>
    </header>

    <ul
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10"
    >
      <li
        v-for="product in products"
        :key="product.id"
        class="border overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-white"
      >
        <div class="flex justify-center items-center bg-gray-100">
          <img
            :src="product.thumbnail"
            alt="Product Image"
            class="object-cover h-48 w-full"
          />
        </div>
        <div class="p-4">
          <h2 class="font-semibold text-lg mb-2 truncate">
            {{ product.title }}
          </h2>
          <p class="text-gray-800 mb-3">Price: ${{ product.price }}</p>
          <p class="text-gray-600 mb-4">Stock: {{ product.stock }}</p>
          <button
            @click="addToCart(product)"
            :class="{
              'bg-green-600 hover:cursor-default': isInCart(product.id),
              'bg-cviolet hover:bg-violet-950': !isInCart(product.id),
            }"
            class="text-white font-bold py-2 px-4 rounded w-full transition-colors duration-300"
          >
            <font-awesome-icon
              :icon="isInCart(product.id) ? 'check' : 'cart-plus'"
              class="mr-2"
            />
            {{ isInCart(product.id) ? "Added to Cart" : "Add to Cart" }}
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
