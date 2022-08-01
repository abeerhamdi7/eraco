<template>
<div class="container">
  <div class="card">
   <img :src="photos.url">


   <p>title:{{this.photos.title}}</p>
      <!-- <p>{{this.photos.thumbnailUrl}}</p> -->

</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: this.$route.params.item,
    }},
    computed: {
    photos() {
      return this.$store.state.photo.photos[(this.$route.params.item)-1]}
    },
created() {
    this.$store.dispatch('photo/getPhotos', this.item)
  },
    }

</script>
<style scoped>
.container{
   padding-bottom: 20px;
    margin-bottom: 20px !important;


      position: relative;
       top:40px;
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
