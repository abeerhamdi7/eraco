<template>
  <div class="container">
    <!-- {{ this.photo}} -->

     <div class="card">

   <img :src="this.photo.url">


   <p>title:{{this.photo.title}}</p>
      <!-- <p>{{this.photos.thuphotombnailUrl}}</p> -->

</div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id


    }
  },
  computed: {
    photo() {
      return this.$store.state.photo.photos[(this.$route.params.id)-1]
    },


  },
  created() {
    this.$store.dispatch('photo/getPhotos', this.id)
  },
}
</script>
<style scoped>
.photo{
 position: relative;
 /* top:150px; */
 padding:10px 30px;
}
.container{
   padding-bottom: 20px;
    margin-bottom: 20px !important;


      /* position: relative;
       top:40px; */
}
.card{

 padding:10px 30px;
  width :400px !important;
  text-align: center;

  margin: auto;


}
.card img{
  width :180px;
  height: 250px;
  display:block;
  border-radius:20px;
  margin: auto;

}


</style>
