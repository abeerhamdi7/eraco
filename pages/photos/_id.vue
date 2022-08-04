<template>
  <div v-if="photo" class="container">
    <Search />
    {{ this.photo }}
    <ul lang="ar" style="direction: rtl">
      <li>ايرادكو الزراعية <i class="fa-solid fa-angle-left"></i></li>
      <li>القسم الفرعي<i class="fa-solid fa-angle-left"></i></li>
      <li style="color: #288d37; font-weight: bold">
        مبيدات حشرية كيماويات زراعية فطريات الصناعة الكيماوية
      </li>
    </ul>
    <!-- {{ this.photo}} -->
    <div class="containercard">
      <div class="contentImg"><img :src="this.photo.url" /></div>

      <div class="leftcard">
        <h4>
          <del class="price"> 158 س ر </del><ins class="sale"> 150 س ر </ins>
        </h4>
        <div>
          <button class="available">متاح</button>
          <button class="available">يتطلب صفح امني</button>
        </div>
        <div>
          <button class="download">
            <i class="fa-solid fa-download" download></i>تحميل النشرة الفنية
          </button>
          <button class="download">
            <i class="fa-solid fa-download" download></i>تحميل اسم الملق
          </button>
        </div>
        <p>
          <i class="fa-solid fa-down-to-bracket"></i>المبيدات الحشرية ومنظمات
          النمو والاسمدة
        </p>

        <button class="product">
          اضف المنتج
          <i class="fa-solid fa-cart-shopping icon"></i>
        </button>
        <div class="link">
          يمكنك زيارة الرابط التالي<nuxt-link to="www.uradunite.com"
            >www.uradunite.com</nuxt-link
          >
        </div>
      </div>

      <!-- <p>{{this.photos.thuphotombnailUrl}}</p> -->
    </div>
    <!-- نبذة عن المنتج -->
    <div class="productDetails">
      <h3 style="color: #f3b900">نبذة عن المنتج</h3>
      <p>
        ببساطة نص شكلي بمعني ان الغاية هي الشكل وليس المحتوي ويستخدم في محتويات
        المصانع ودور النشر .كان لوريم ابسيوم ولا يزال معيار للنص الشكلي منذ
        القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الاحرف بشكل
        عشوائي اخذتها من نص ,لتكون كتيب بمثابة دليل او مقطع شكلي لهذه الاحرف
        .خمسة قرون من الزمن لم تقضي علي هذا النص .بل حتي صار مستخدما وبشكله
        الاصلي في الطباعة
      </p>
      <button>طلب عرض سعر</button>
    </div>

    <Shows class="shows" />
    <Shows class="shows2" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    photo() {
      return this.$store.state.photo.photos[this.$route.params.id - 1]
    },
  },
  created() {
    this.$store.dispatch('photo/getPhotos', this.id)
  },
}
</script>
<style scoped>
.container {
  background-color: white;
}
.shows,
.shows2 {
  width: 100% !important;
}
.shows2 {
  background-color: gainsboro;
}

.contentImg {
  width: 500px !important;
  height: 450px;

  margin-left: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
img {
  width: 300px !important;
  height: 350px;

  margin: auto;

  display: block;
  border-radius: 20px;
  position: relative;
  top: 50px;
}

.containercard {
  font-size: 22px;

  text-align: center;
  color: black;
  display: flex;
  padding-top: 40px;
  padding-top: 40px;
  margin-bottom: 50px;
}
p {
  margin: 20px 0;
}
.price {
  color: gainsboro;
  font-size: 20px;
  margin-left: 30px;
}
.leftcard {
  text-align: right;
}
.product button i {
  position: absolute;
  top: 15px;
  left: 10px;
}
button {
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  text-align: center;

  font-size: 20px;
  margin-bottom: 15px;
  margin-top: 15px;
  cursor: pointer;
}
.product {
  background-color: #f3b900;

  width: 100%;
  margin-top: 20px;
}

ul {
  display: flex;
  align-items: center;
  margin-top: 50px;
}
li {
  color: gray;
  font-size: 18px;
  margin-left: 15px;
}
li i {
  color: black;
  position: relative;
  top: 4px;
  right: 3px;
  font-size: 25px;
}
.sale {
  color: #8a230d;
  font-size: 25px;
  text-decoration: none;
}
.available {
  background-color: gainsboro;
  color: white;
}
.download {
  color: #288d37;
  border: 1px solid #288d37;
  background-color: white;
}
.download i {
  margin-left: 5px;
}
input[type='link'] {
  /* border:none; */
  outline: none;
}
.link {
  font-size: 20px;
  color: #288d37;
  font-weight: bold;
}
.link a {
  color: black;
}
/*  style ==>productDetails */
.productDetails {
  font-size: 20px;
  color: black;
  width: 1000px;
}
.productDetails button {
  background-color: white;
  border: 1px solid #f3b900;
  color: #f3b900;
  font-weight: bold;
}
</style>
