<template>
  <div class="container">
    <div class="add">
      <i class="fa-solid fa-leaf"></i>
      <h3>العروض</h3>
      <i class="fa-solid fa-leaf leftLeaf"></i>
    </div>

    <div class="sections">
      <div class="containertrapezoid">
        <div class="trapezoid1"></div>
        <div class="trapezoid2">
          <h4>جديد</h4>
        </div>
      </div>
      <div class="sections" v-for="item in 4" key="item.id">
      <div class="containersection">
        <div class="section">
          <div class="containerimg"><img src="../../images/Image 9.png" /></div>
          <p>المبيدات الحشرية ومنظمات النمو والاسمدة</p>
          <h5>س ر 250$</h5>


        </div>
        <button>
            عرض المنتج<i class="fa-solid fa-cart-shopping icon"></i>
          </button>
      </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container{
  background-color:white;

}

.container .add {
  text-align: center;
  color: #f3b900;
  margin: auto;
  margin-bottom: 70px;
}

.sections {
  background-color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 15px;


}
.containertrapezoid {
  height: 80px;
  width: 100px;
  position: absolute;
  top: 80px;
  left: -2px;
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
  right: 20px;
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
.section {
  width: 260px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  direction: rtl;
  border-radius:15px;
}
.section img {
  height: 220px;
  width: 210px;
}
.section .containerimg {
  width: 250px;
  /* overflow-y: scroll !important; */
  direction: ltr;
}
.section p {
  color: black;
  text-align: right;
  font-size: 18px;
  margin-top: 20px;
  text-align-last: center;
}
.containersection button {
  background-color: #f3b900;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 5px 10px 15px 40px;

  font-size: 20px;
  position: relative;
   bottom:30px;
   right:50px;
}

.containersection button i {
  position: absolute;
  top:15px;
  left:10px;



}
.section h5 {
  color: #8a230d;
}


.section:hover {
  opacity: 0.2;

}

</style>
