<template>
  <nuxt-link class="arrow" to="/components/Nav">
    <i class="fa-solid fa-arrow-up"></i>
  </nuxt-link>

</template>


<style scoped>
.arrow {
  width: 50px !important;
  height: 50px;
  border-radius: 50%;
  color: #288d37 !important;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  text-align: center;

  position: fixed;
  top: 560px;
  right: 10px;
}
.arrow i {
  font-size: 25px;
}
</style>
