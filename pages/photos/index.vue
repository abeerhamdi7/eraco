<template>
  <div class="container containerPhotos">
   <nuxt-link to="/"> <h1>photos</h1></nuxt-link>
    <!-- <p>{{this.$store.state.photo.photos.slice(0,5)}}</p> -->


    <!-- <div>{{photo.id}}</div>
    <div>{{photo.title}}</div> -->
   <div class="cards" >
     <div class="card" v-for="photo in photos.slice(0,20)" :key="photo.id">
      <img :src="photo.url" alt="card">
       <!-- <button><nuxt-link  to="/photo">shows</nuxt-link></button> -->
      <button><nuxt-link :to="`/photos/${photo.id}`">shows</nuxt-link></button>





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
h1{
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
}
.card{
    margin-bottom:40px;
  }
.card img{
  width :180px;
  height: 250px;
  display:block;
  border-radius:20px;
}
 button {
  background-color: #6e580c;
  border-radius: 10px;
  border: none;


  font-size: 22px;
  padding:9px 20px;
  margin-right:35px !important;

}
a{
color:white !important;
}
.cards{
  display:flex !important;

 justify-content: space-evenly;

  margin-right:20px !important;
  flex-wrap: wrap;
  margin-bottom: 20px;



}

</style>
