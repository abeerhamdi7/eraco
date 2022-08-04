<template>
 <div>
   <div class="containerSliders">
    <a-carousel autoplay>
      <div class="slide slide1">
        <div class="contentLeftSlider1">
          <img src="../../images/slider1.png" class="img1" />
          <img src="../../images/slider1.png" class="img2" />
        </div>
        <div class="rightSlider1">
          <div>
            <h2 style="color: #288d37">نيوفينات ميثيل</h2>
            <h2>70%</h2>
          </div>
          <div><img src="../../images/photo-27.png" /></div>
        </div>
      </div>



    </a-carousel>
     </div>
  <div class="container">
    <Search />
    <LeftMedia />



  </div>
 </div>
</template>
<style scoped>
.containerSliders{
  background-color: #bcccc0;
  width:100% !important;
  direction:ltr;

}
.ant-carousel :deep(.slick-arrow .custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.ant-carousel {
  background-color: #dce6de !important;
  height: 400px !important;
}
.slide {
  margin: auto;
  padding-top: 60px;
  display: flex !important;
  justify-content: space-between;
  width: 100% !important;
  height: 400px;
}

.contentLeftSlider1 {
  display: flex;
  align-items: center;
  margin-left: 100px;
}
.contentLeftSlider1 .img1 {
  width: 180px;
  height: 300px;
  z-index: 2;
}
.contentLeftSlider1 .img2 {
  width: 160px;
  height: 250px;
  position: relative;
  top: 10px;

  right: 40px;
}
.rightSlider1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rightSlider1 h2 {
  font-weight: 900;
  font-size: 40px;
  line-height: 1.5;
  text-align: center;
}

.slide2 img,
.slide3 img {
  height: 280px;
  width: 300px;
}
.slick-list .slick-dots li button {
  background-color: white !important;
  width: 25px !important;
  height: 25px !important;
  border: 1px solid green !important;
  border-radius: 50% !important;
}
.slick-dots li.slick-active button {
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background: red;
}
.ant-carousel {
  background-color: #dce6de !important;
  height: 400px !important;
}
.slide {
  margin: auto;
  padding-top: 60px;
  display: flex !important;
  justify-content: space-between;
  width: 100% !important;
  height: 400px;
}

.contentLeftSlider1 {
  display: flex;
  align-items: center;
  margin-left: 100px;
}
.contentLeftSlider1 .img1 {
  width: 180px;
  height: 300px;
  z-index: 2;
}
.contentLeftSlider1 .img2 {
  width: 160px;
  height: 250px;
  position: relative;
  top: 10px;

  right: 40px;
}
.rightSlider1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rightSlider1 h2 {
  font-weight: 900;
  font-size: 40px;
  line-height: 1.5;
  text-align: center;
}

.slide2 img,
.slide3 img {
  height: 280px;
  width: 300px;
}
.slick-list .slick-dots li button {
  background-color: white !important;
  width: 25px !important;
  height: 25px !important;
  border: 1px solid green !important;
  border-radius: 50% !important;
}
.slick-dots li.slick-active button {
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background: red;
}
.container{
  background-color:white !important;
}
</style>
