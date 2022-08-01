<template>
  <div class="container contaninershows">
    <div class="add">
      <i class="fa-solid fa-leaf"></i>
      <h3>العروض</h3>
      <i class="fa-solid fa-leaf"></i>
    </div>

    <div class="sections">
      <div class="containertrapezoid">
        <div class="trapezoid1"></div>
        <div class="trapezoid2">
          <h4>جديد</h4>
        </div>
      </div>
      <div class="sections" v-for="item in 4" key="item.id">
        <div class="section">
          <div class="containerimg"><img src="../../images/Image 9.png" /></div>
          <p>المبيدات الحشرية ومنظمات النمو والاسمدة</p>
          <h5>س ر 250$</h5>

          <button>
            عرض المنتج<i class="fa-solid fa-cart-shopping icon"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contaninershows {
  position: relative;
  top: 70px;

  padding-top: 50px;
  background-color: white;
}
.container .add {
  text-align: center;
  color: #f3b900;
  margin: auto;
  margin-bottom: 70px;
}
.add h3 {
  display: inline;
  border-bottom: 2px solid #f3b900;
  color: #f3b900;

  width: 100px !important;
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
.section button {
  background-color: #f3b900;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 5px 18px 15px 18px;

  font-size: 20px;
  position: relative;
  top: 25px;
}

.section button i {
  position: relative;
  top: 7px;
}
.section h5 {
  color: #8a230d;
}

.custom-slick-arrow right-circle-outlined {
  border: 3px solid green !important;
  height: 30px !important;
}
.section:hover {
  opacity: 0.2;
}
.section button:hover {
  background-color: #f3b900 !important;
}
</style>
