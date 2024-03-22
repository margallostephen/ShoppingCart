<template>
  <header
    id="header"
    class="sticky top-0 left-0 w-full bg-cviolet text-white py-6 transition-transform duration-300 z-10"
  >
    <div class="container text-2xl px-8 flex align-middle gap-2">
      <font-awesome-icon icon="shopping-bag" class="mt-1" />
      <h1 class="font-bold">Gadget Hub</h1>
    </div>
  </header>

  <ul
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10"
  >
    <li
      v-for="product in products"
      :key="product.id"
      class="border overflow-hidden shadow-lg hover:shadow-xl bg-white"
    >
      <div class="flex justify-center items-center bg-gray-100">
        <img
          :src="product.image"
          alt="Product Image"
          class="object-cover h-48 w-full"
        />
      </div>
      <div class="p-4">
        <h2 class="font-semibold text-lg mb-2 truncate">
          {{ product.name }}
        </h2>
        <p class="text-gray-800 mb-3">Price: ${{ product.price }}</p>
        <p class="text-gray-600 mb-4">Stock: {{ product.stock }}</p>
        <button
          @click="changeProduct(product)"
          :class="{
            'bg-green-600 hover:cursor-default': product.addedToCart,
            'bg-cviolet hover:bg-violet-950': !product.addedToCart,
          }"
          class="text-white font-bold py-2 px-4 rounded w-full transition-transform duration-500 hover:scale-105"
        >
          <font-awesome-icon
            :icon="product.addedToCart ? 'check' : 'cart-plus'"
            class="mr-2"
          />
          {{ product.addedToCart ? "Added to Cart" : "Add to Cart" }}
        </button>
      </div>
    </li>
  </ul>
  <ShoppingCart
    :productToAdd="productToAdd"
    @product-removed="handleProductRemoved"
  ></ShoppingCart>
</template>

<script>
import ShoppingCart from "../components/ShoppingCart.vue";

export default {
  name: "ProductList",
  components: {
    ShoppingCart,
  },
  data() {
    return {
      productToAdd: {},
      products: [
        {
          id: 1,
          name: "iPhone 9",
          price: 549,
          stock: 94,
          image: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
          addedToCart: false,
        },
        {
          id: 2,
          name: "iPhone X",
          price: 899,
          stock: 34,
          image: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
          addedToCart: false,
        },
        {
          id: 3,
          name: "Samsung Universe 9",
          price: 1249,
          stock: 36,
          image: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
          addedToCart: false,
        },
        {
          id: 4,
          name: "OPPOF19",
          price: 280,
          stock: 123,
          image: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
          addedToCart: false,
        },
        {
          id: 5,
          name: "Huawei P30",
          price: 499,
          stock: 32,
          image: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
          addedToCart: false,
        },
        {
          id: 6,
          name: "MacBook Pro",
          price: 1749,
          stock: 83,
          image: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
          addedToCart: false,
        },
        {
          id: 7,
          name: "Samsung Galaxy Book",
          price: 1499,
          stock: 50,
          image: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
          addedToCart: false,
        },
        {
          id: 8,
          name: "Microsoft Surface Laptop 4",
          price: 1499,
          stock: 68,
          image: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
          addedToCart: false,
        },
        {
          id: 9,
          name: "Infinix INBOOK",
          price: 1099,
          stock: 96,
          image: "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
          addedToCart: false,
        },
        {
          id: 10,
          name: "HP Pavilion 15",
          price: 1099,
          stock: 89,
          image: "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
          addedToCart: false,
        },
      ],
    };
  },
  methods: {
    changeProduct(product) {
      if (!product.addedToCart) {
        this.productToAdd = product;
        product.addedToCart = true;
      }
    },
    handleProductRemoved(productId) {
      const product = this.products.find((product) => product.id === productId);
      if (product) product.addedToCart = false;
    },
  },
};
</script>
