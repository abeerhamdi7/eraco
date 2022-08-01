<template>
  <div class="containerNav" id="nav" data-index="1">
    <div class="rightNav">
      <nuxt-link class="home" to="/">الرئيسية</nuxt-link>
      <nuxt-link class="sections" to="/shows">الاقسام</nuxt-link>
      <nuxt-link class="shows" to="/photos">العروض</nuxt-link>
      <nuxt-link class="media" to="/media">الوسائط</nuxt-link>
      <nuxt-link class="about" to="/about">من نحن</nuxt-link>
    </div>

    <div class="logo">
      <img src="../../images/photo-4.png" />
    </div>

    <div class="leftNav">
      <nuxt-link to="/login"
        ><i class="fa-solid fa-angle-down"></i> الدخول
      </nuxt-link>
      <nuxt-link to="/pages/index.vue"
        ><i class="fa-solid fa-bell icon"></i
      ></nuxt-link>
      <nuxt-link to="/pages/index.vue"
        ><i class="fa-solid fa-cart-shopping icon"></i
      ></nuxt-link>
    </div>
  </div>
</template>
<style>
/* style navbar */
.containerNav {
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;

  border-right: 1px solid rgb(251, 250, 252);
  height: 50px;
  box-shadow: 0 10px 5px -5px rgb(209, 204, 204);

  position: absolute;
  left: 10%;
  z-index: 99;
  background-color: white;
  direction: rtl;
}
.containerNav a {
  color: black;
  font-size: 16px;
  margin-left: 20px;
  text-decoration: none;
}
/* style left navbar */
.containerNav .rightNav {
  padding-right: 60px;
}
.containerNav .leftNav {
  padding-left: 30px;
}
/* container middle navbar */
.containerNav .logo {
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 10px 5px -2px rgb(209, 204, 204);

  position: absolute;
  top: 60px; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  background-color: white;

  transform: translate(-50%, -50%);
  z-index: 5;
}
.containerNav img {
  height: 95px;
  width: 100px;
}
.containerNav .icon {
  color: #288d37;
  font-size: 25px;
}
.nuxt-link-exact-active {
  color: #288d37 !important;
  font-weight: bold;
}
</style>
