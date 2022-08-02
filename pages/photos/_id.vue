<template>
  <div class="container ">
    <!-- {{ this.photo}} -->
<div class="containercard">
     <div class="card">

   <img :src="this.photo.url">


     <p>المبيدات الحشرية ومنظمات النمو والاسمدة</p>
          <h4 class="price">س ر 250$</h4>
     </div>
      <button>عرض المنتج<i class="fa-solid fa-cart-shopping icon"></i></button>
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


.card img{
  width :180px !important;
  height: 250px;
  margin:auto;
  display:block;
  border-radius:20px;


}
.card{
 box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
 padding:40px 20px;
 background-color:white;
}
.containercard{
  width:300px !important;

  font-size:22px;
   margin:auto;
   text-align:center;
   color:black;
}
p{
  margin:20px 0;
}
 h4{
   color: #8a230d !important;
   font-size:25px;
}
.card button i {
  position: absolute;
  top:15px;
  left:10px;
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
.card:hover {
  opacity: 0.2;
  background-color:#288d37
}
</style>
