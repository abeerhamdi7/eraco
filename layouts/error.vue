<template>
  <div class="container" v-if="error.statusCode ===404">

    <img src="../../images/oops-404.webp">
    <h1 > page not found </h1>
  </div>
</template>
<script>


export default {
 props:['error'],

}

</script>
<style scoped>
.container{
  display:flex;
  justify-content: space-evenly;
  align-items:center;
  padding:50px 0;

}
.container h1{

  color:#37b1a2;
  position: relative;
  top:40px;

}
img{
  width:300px;
  margin-top:30px;
  border-radius:10px;

}
</style>

