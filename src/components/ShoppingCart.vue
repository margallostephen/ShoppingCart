<template>
  <div>
    <button
      @click="toggleCart"
      class="fixed top-6 right-8 bg-white font-bold py-2 px-2.5 rounded-full z-10 hover:scale-105 transition-transform duration-1000"
    >
      <div
        class="absolute top-[-15px] right-0 flex items-center justify-center w-6 h-6 rounded-full bg-red-500"
      >
        <p class="text-white grid py-1 px-2 text-xs">
          {{ itemCount }}
        </p>
      </div>
      <font-awesome-icon icon="shopping-cart" class="mr-0.5 text-black" />
    </button>

    <div
      v-if="isCartOpen"
      class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 md:py-10 z-10"
    >
      <div class="bg-white p-8 w-full md:w-3/4 max-h-full overflow-y-auto">
        <div class="flex justify-between">
          <h2 class="text-xl font-bold">Shopping Cart</h2>
          <button
            @click="toggleCart"
            class="bg-red-500 hover:bg-red-700 text-white text-sm font-bold h-fit py-2 px-4 rounded transition-transform duration-300 hover:scale-105"
          >
            <font-awesome-icon icon="close" />
          </button>
        </div>
        <div v-if="itemCount > 0">
          <p
            class="text-md border border-y-gray-200 border-x-transparent mt-4 py-2"
          >
            Item Count - {{ itemCount }}
          </p>
        </div>
        <ul>
          <li
            v-for="(product, index) in cart"
            :key="index"
            class="grid grid-cols-1 md:grid-cols-2 py-2 border-b gap-3"
          >
            <div class="flex items-center gap-3">
              <img
                :src="product.image"
                alt="Product Image"
                class="w-16 h-16 mr-4"
              />
              <div>
                <p class="font-semibold">{{ product.name }}</p>
                <p class="text-sm">${{ product.price }}</p>
              </div>
            </div>
            <div
              class="flex justify-center gap-2 flex-col sm:flex-row lg:justify-end items-center"
            >
              <div class="flex items-center gap-2">
                <label for="quantity" class="text-sm">Quantity</label>
                <input
                  id="quantity"
                  type="number"
                  v-model="product.quantity"
                  @input="updateQuantity(product.id)"
                  min="1"
                  class="w-16 border rounded-md py-1 px-2 text-center"
                />
              </div>
              <button
                @click="removeFromCart(index)"
                class="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded transition-transform duration-500 hover:scale-105"
              >
                <font-awesome-icon icon="trash-alt" class="mr-1" />
                Remove
              </button>
            </div>
          </li>
        </ul>
        <p v-if="itemCount === 0" class="mt-4 text-sm text-gray-600">
          Your cart is empty.
        </p>
        <p v-else class="mt-4 text-lg">
          Total: <span class="font-bold">${{ total }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: ["productToAdd"],
  data() {
    return { cart: [], isCartOpen: false };
  },
  methods: {
    removeFromCart(index) {
      this.$emit("product-removed", this.cart[index].id);
      this.cart.splice(index, 1);
    },
    updateQuantity(index) {
      const product = this.cart[index];
      if (product)
        product.quantity = Math.max(
          1,
          Math.min(product.quantity, product.stock)
        );
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
  },
  computed: {
    total() {
      return this.cart.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
    },
    itemCount() {
      return this.cart.length;
    },
  },
  watch: {
    productToAdd: {
      handler(newValue) {
        if (newValue) this.cart.push({ ...newValue, quantity: 1 });
      },
    },
  },
};
</script>
