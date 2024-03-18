<template>
  <div>
    <ProductList
      :products="products"
      :cart="cart"
      @add-to-cart="addToCart"
    ></ProductList>
    <ShoppingCart 
      :cart="cart" 
      @remove="removeFromCart">
    </ShoppingCart>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  name: "App",
  components: { ProductList, ShoppingCart },
  data() {
    return { products: [], cart: [] };
  },
  async created() {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=10`);
      if (!response.ok) throw new Error("Failed to fetch products");
      this.products = (await response.json()).products;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  methods: {
    addToCart(product) {
      if (!this.cart.find((item) => item.id === product.id))
        this.cart.push({ ...product, quantity: 1 });
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
  },
};
</script>
