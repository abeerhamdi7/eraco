<template>
<div class="cards">
  <div class="card" v-for="i in 9" :key="i.id">
    <img src="../../images/Image-36.png">
    <p>اسم المقال كاملا في سطر او اكثر</p>
    <button>مشاهدة</button>
  </div>

</div>
</template>
<style scoped>
.cards{
  display:flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color:black;
  font-size: 18px;
}
.card{
  width:200px;
  border-radius:20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  margin-bottom:30px;
}

   .card img{
    height:250px;
    width:100%;
        border-radius:20px;
   }
   .card p{
    padding:20px 0;
   }

   .card button{
    border:none;
    border-radius:20px;
    background-color:#f3b900;
    padding:5px 15px;
    color:white;
    margin-bottom:20px;

   }
</style>

