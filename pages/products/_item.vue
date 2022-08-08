<template>
  <div>

    {{ this.product}}

  </div>
</template>

<script>
export default {
  data() {
    return {
      item: this.$route.params.item,
    }
  },
  computed: {
    product() {

      return this.$store.state.product.product2
    },
  },
  created() {
    this.$store.dispatch('product/getProduct2', this.item)
  },
}
</script>

