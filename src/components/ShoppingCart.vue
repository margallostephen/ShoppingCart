<template>
  <div>
    <button
      @click="toggleCart"
      class="fixed top-6 right-8 bg-white font-bold py-2 px-2.5 rounded-full z-10 hover:scale-105 transition-transform duration-300"
    >
      <div
        class="absolute top-[-15px] right-0 flex items-center justify-center w-6 h-6 rounded-full bg-red-500"
      >
        <p class="text-white grid py-1 px-2 text-xs">
          {{ itemCount }}
        </p>
      </div>
      <font-awesome-icon icon="shopping-cart" class="mr-0.5" />
    </button>

    <div
      v-if="isCartOpen"
      class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 py-10 z-10"
    >
      <div class="bg-white p-8 w-3/4 max-h-full overflow-y-auto">
        <div class="flex justify-between">
          <h2 class="text-lg font-bold">Shopping Cart</h2>
          <button
            @click="toggleCart"
            class="bg-red-500 hover:bg-red-700 text-white text-sm font-bold h-fit py-2 px-4 rounded"
          >
            <font-awesome-icon icon="close" />
          </button>
        </div>
        <div v-if="cart.length > 0">
          <p
            class="text-md border border-y-gray-200 border-x-transparent mt-4 py-2"
          >
            Item Count - {{ itemCount }}
          </p>
        </div>
        <ul>
          <li
            v-for="(item, index) in cart"
            :key="index"
            class="flex justify-between items-center py-2 border-b gap-3 flex-wrap"
          >
            <div class="flex flex-wrap">
              <img
                :src="item.thumbnail"
                alt="Product Image"
                class="w-16 h-16 mr-4 rounded"
              />
              <p class="font-semibold grid items-center">
                {{ item.title }} - ${{ item.price }}
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              Quantity -
              <input
                type="number"
                v-model="item.quantity"
                @input="updateQuantity(item)"
                min="1"
                class="w-16 border rounded-md py-1 px-2 text-center"
              />
              <button
                @click="removeFromCart(index)"
                class="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded"
              >
                <font-awesome-icon icon="trash-alt" class="mr-1" />
                Remove
              </button>
            </div>
          </li>
        </ul>
        <p v-if="cart.length === 0" class="mt-4 text-sm text-gray-600">
          Your cart is empty.
        </p>
        <p v-else class="mt-4 text-xl">
          Total: <span class="font-bold">${{ total }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: ["cart"],
  data() {
    return {
      isCartOpen: false,
    };
  },
  computed: {
    total() {
      return this.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    itemCount() {
      return this.cart.length;
    },
  },
  methods: {
    removeFromCart(index) {
      this.$emit("remove", index);
    },
    updateQuantity(item) {
      item.quantity = Math.max(1, Math.min(item.quantity, item.stock));
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
  },
};
</script>
