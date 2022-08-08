<template>
   <div class="container">

    <p v-for="product in products.slice(0,20)" :key="product.id">
      {{ this.product }} <br/><br/>
    </p>

   </div>
</template>
<script>
import product from '~/store/product'
export default {
  computed:{
    products(){
      return this.$store.state.product.products
    },
  },
created(){
  this.$store.dispatch("product/getProducts")
},
  }
</script>

