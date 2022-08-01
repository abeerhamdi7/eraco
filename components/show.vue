<template>
  <div class="container contaninershow">
 <div class="add">
 <i class="fa-solid fa-leaf"></i>
       <h3>العرض</h3>
       <i class="fa-solid fa-leaf"></i>
 </div>
 <div class="containerImages" v-for="i in 3" key="i.id">
  <img src="../../images/Image 10.png" alt="green">
  <img src="../../images/Image 12.png" alt="green">
  <img src="../../images/Image 13.png" alt="green">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ltzlhAxJr74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 </div>
 </div>
</template>
<style scoped>
.contaninershow{
  margin-top:100px !important;
  margin-bottom: 30px !important;
  background-color: white;

}
.containerImages{
  display:flex;

  align-items: center;
  margin-bottom: 20px;
}
.containerImages img{
  width:230px;
  height: 250px;
  margin-left: 10px;
  border-radius:15px;
}
.containerImages iframe{
   width:380px;
  height: 180px;
   margin-right: 10px;
   border-radius:15px;
}
</style>
