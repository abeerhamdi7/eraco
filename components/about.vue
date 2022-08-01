<template>
  <div class="container about">
    <div class="add">
      <i class="fa-solid fa-leaf"></i>
      <h3>من نحن</h3>
      <i class="fa-solid fa-leaf"></i>
    </div>
    <div class="containerAbout">
      <p>
        في القرن الخامس عشر عندما قامت مطبعة مجهولة برص من الاحرف بشكل عشوائي
        اخذتها من نص, لتكون كتيب بمثابة دليل او مرجع شكلي لهذه الاحرف . خمسة
        قرون من الزمن لمتقضي علي هذا النص ,بل انه حتي صار مستخدما وبشكله الاصلي
        في الطباعة والتنفيذ الالكتروني .انتشر بشكل كبير في شتينات هذا القرن .
      </p>
      <img src="../../images/photo-3.png" />
    </div>
  </div>
</template>
<style scoped>
.about {
  background-color: white;

  position: relative;
  top: 100px;
}

.containerAbout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 200px !important;
}
.containerAbout img {
  width: 250px;
  height: 250px;
  border: 20px solid rgb(5, 73, 5);
  border-radius: 50%;
  border-top: 2px;
  border-bottom: 2px;
  padding: 20px;
}
.containerAbout p {
  width: 450px;
  color: black;
  text-align: right;
  font-size: 18px;
}
</style>
