<template>
<div class="container containerMedia">
<div class="leftMedia">
  <ul style="display:block">
    <li>ايرادكو البيطرية</li>
    <li>ايرادكو الزراعية <i class="fa-solid fa-chevron-down"></i>
    <ul style="display:block" class="sectionAgriculure">

      <li class="section">قسم فرعي الزراعية</li>
      <li class="section">قسم فرعي الزراعية</li>
      <li class="section">قسم فرعي الزراعية</li>
      <li class="section">قسم فرعي الزراعية</li>
    </ul>



    </li>
    <li>ايرادكو الصحة العامة</li>
    <li>مصنع ايرادكو</li>
    <li>مشاتل ايرادكو</li>
  </ul>
</div>
<div class="containerRightMedia">
  <ul class="rightMedia">
  <li><nuxt-link to="/">صور</nuxt-link></li>
  <li><nuxt-link to="/">فيديوهات</nuxt-link></li>
  <li><nuxt-link to="/">نشرات</nuxt-link></li>
  <li  class="noborder"><nuxt-link to="/">مقالات</nuxt-link></li>

</ul>
<CardsMedia />
</div>
</div>

</template>
<style scoped>
.leftMedia{
  background-color: gainsboro;
  margin-top:80px;
  font-size:15px;
  color:black;
  padding:10px 0;
  height:500px;



}
.leftMedia ul{

 text-align:right !important;
 width:200px;
 }


li{
  line-height: 4;
   font-weight:bold;

}
.sectionAgriculure  {
  width:150px !important;
}
.sectionAgriculure li{
  line-height: 2;
  font-size:12px;
  color:#288d37;
  border-right:2px solid rgb(187, 184, 184);
  padding-right:10px;
  font-weight:400;


}
 i{
  margin-right:30px;

}
.containerMedia{
  display: flex;
}
/* style -> rightMedia */
ul{
display: flex;


}
.rightMedia  li a{
  padding:0 50px;
  color:gray !important;
  font-size:20px;
  border-left:1px  solid rgb(187, 184, 184);
  font-weight:normal;
}
.noborder a{
  border-left:none !important;
}
.nuxt-link-exact-active{
  color:#f3b900;

}
</style>
