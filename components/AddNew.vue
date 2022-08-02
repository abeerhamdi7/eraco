<template>
  <footer class="container">
    <h3 style="direction:ltr">
      <i class="fa-solid fa-leaf leftLeaf"></i>شركة النجاح<i
        class="fa-solid fa-leaf"
      ></i>
    </h3>
    <div class="containerImg">
      <img src="../../images/clogo_-1.png" alt="ultra" />
      <img src="../../images/unnamed.png" alt="nahr" />

      <img src="../../images/clogo_-2.png" alt="green" />
      <img src="../../images/لوجو.png" alt="logo" />
      <img src="../../images/clogo_-1.png" alt="ultra" />
      <img src="../../images/unnamed.png" alt="nahr" />
      <img src="../../images/clogo_-2.png" alt="green" />
    </div>

    <div class="line2">
      <div class="line1"></div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background-color: gainsboro;
  padding-bottom: 100px ;


}
footer h3 {

  text-align: center;
  color: #f3b900 !important;


}
footer h3 i {
  margin: 0px 10px;
}
footer img {
  width: 110px;
  height: 120px;

}
footer .containerImg {
  display:flex;
  justify-content: space-between;
  margin:50px 0;

}

footer .line1 {
  border: 1px solid green;
  width: 150px;
  margin: auto;


}
footer .line2 {
  border: 1px solid rgb(165, 162, 162);
  background-color:rgb(165, 162, 162) ;
  width: 500px;
  position: relative;
  margin: auto;
  margin-top:100px;

}
</style>
