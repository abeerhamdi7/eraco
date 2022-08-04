<template>
  <div class="cards">
    <div class="card">
      <img src="~/assets/img/Image 27.png">
      <h2 >مشاتل ايرادكو </h2>
    </div>
     <div class="card">
      <img src="~/assets/img/Image 26.png">
      <h2 >مصنع ايرادكو </h2>
    </div>
    <div class="card">
      <img src="~/assets/img/Image 25.png">
      <h2 >   ايرادكو البيطرية </h2>
    </div>
    <div class="card">
      <img src="~/assets/img/Image 24.png">
      <h2 >   ايرادكو الصحة العامة </h2>
    </div>
    <div class="card">
      <img src="~/assets/img/Image 23.png">
      <h2 >   ايرادكو الزراعية </h2>
    </div>

  </div>
</template>
<style scoped>
/* style cards */
.cards{
  display: flex;
  justify-content: center;

  margin:50px 30px 100px 30px;
}
.card{
  width:calc(17%) !important;
  height: 200px !important;
  padding: 20px 20px;

}
.cards img{
  width:90%;
  height: 160px;
  margin: auto !important;
  border-radius: 30px;
  margin-bottom: 25px !important;
}
.cards h2{
text-align: center !important;
font-size: 20px;
}

  .card:hover img{
    width:118%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    height: 200px;
    transition: all 1s;
  }
  .shows{
    height: 400px;
    background-color: #dce6de !important;
    margin-top: 130px !important;
    border: 2px solid red;
  }
  </style>

</style>
