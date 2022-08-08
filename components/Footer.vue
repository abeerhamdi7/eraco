<template>
  <footer>
    <div class="container containerFooter">
      <ul>
        <li>التطبيقات</li>
        <li><img src="~/assets/img/pngegg.png" alt="parcode" /></li>
      </ul>
      <ul>
        <li>0045854496865</li>
        <li>0045854496865</li>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <li></li>
      </ul>
      <ul>
        <li>من نحن</li>
        <li>عروض</li>
      </ul>
      <ul>
        <li>الرئيسية</li>
        <li>الاقسام</li>
        <li>الوسائط</li>
      </ul>
      <ul class="rightFooter">
        <li><img src="~/assets/img/photo-19.png" alt="logo" /></li>
        <li>
          <p>
            القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الاحرف بشكل
            عشوائي اخذتها
          </p>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background-color: #dce6de;
  width: 100% !important;
  margin-top: 30px;
}
.containerFooter {
  display: flex;
  margin-top: 50px !important;
  justify-content: space-between;
  direction: ltr;
}
.rightFooter {
  width: 400px;
  font-size: 18px;
}
ul {
  list-style: none;
  font-size: 18px;

  direction: rtl;
  line-height: 2;
}
.containerFooter img {
  width: 120px;
}
/* icons */
i {
  font-size: 25px;
  margin-right: 10px;
  text-align: left;
}
</style>
