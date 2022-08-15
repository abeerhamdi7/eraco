<template>


   <div class="container containerPhotos">
    <Search />
   <nuxt-link to="/"><div class="add">
      <i class="fa-solid fa-leaf"></i>
      <h3>العروض</h3>
      <i class="fa-solid fa-leaf leftLeaf"></i>
    </div></nuxt-link>
    <!-- <p>{{this.$store.state.photo.photos.slice(0,5)}}</p> -->


    <!-- <div>{{photo.id}}</div>
    <div>{{photo.title}}</div> -->

   <div class="cards" >
       <div class="containertrapezoid">
        <div class="trapezoid1"></div>
        <div class="trapezoid2">
          <h4>جديد</h4>
        </div>
      </div>
    <div  class="containercard"

    
    <div class="card" >
      <img :src="photo.url" alt="card">
       <!-- <button><nuxt-link  to="/photo">shows</nuxt-link></button> -->
       <p>المبيدات الحشرية ومنظمات النمو والاسمدة</p>
          <h4 class="price">س ر 250$</h4>
     </div>
      <button><nuxt-link :to="`/photos/${photo.id}`">عرض المنتج<i class="fa-solid fa-cart-shopping icon"></i></nuxt-link></button>







   </div>

   </div>
</div>



   <!-- <nuxt-link to="`/${photo.id}`">{{photo.id}}</nuxt-link>  -->
</template>
<script>
import photo from '~/store/photo'
export default {
  computed:{
    photos(){
      return this.$store.state.photo.photos
    },
  },
created(){
  this.$store.dispatch("photo/getPhotos")
},
  }
</script>
<style scoped>
.container{
padding-top:120px;
background-color:white;
}

h1{
  text-align: center;

}
.containercard{
    margin-bottom:20px;
    width :300px !important;
    text-align:center;

    position:relative;
}
.card{
   padding:40px 10px;
   padding-bottom:40px;

   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.card img{
  width :180px;
  height: 250px;
  margin:auto;
  display:block;
  border-radius:20px;
}

a{
color:white !important;
}
.cards{
  display:flex;
 justify-content: space-between;
 align-items: center;

  flex-wrap: wrap;
  margin-bottom: 20px;
  background-color: white;
  font-size:22px;
  color:black;
  position:relative;
}
.containercard button {
  background-color: #f3b900;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 5px 10px 15px 40px;

  font-size: 20px;
  position: relative;
   bottom:25px;

}

.containercard button i {
  position: absolute;
  top:15px;
  left:10px;



}
h4 {
  color: #8a230d;
}
p{
  margin:20px 0;
  text-align: center;
}

.containertrapezoid {
  height: 80px;
  width: 100px;
  position: absolute;
  top: 80px;
  left: 1px;
  z-index: 10;


}

.trapezoid2 {
  border-left: 70px solid #f3b900;
  border-bottom: 20px solid transparent;
  border-right: 40px solid transparent;
  border-top: 10px solid transparent;
  height: 55px !important;
  width: 0px !important;

  text-align: right !important;
  position: absolute;

  bottom: 20px !important;
  left: 10px;
}
.trapezoid2 h4 {
  position: absolute;
  right: 30px;
  color: white;
  font-size: 18px;
}
.trapezoid1 {
  border-bottom: 18px solid #f3b900;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  height: 0;
  width: 98px;
  transform: rotate(270deg);
  position: relative;
  right: 43px;
  top: 20px;
}
.card:hover {
  opacity: 0.2;
  background-color:#288d37
}

</style>
