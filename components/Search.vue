<template>
  <div class="search">
    <button class="buttonSearch">بحث</button>
    <input
      type="text"
      placeholder="اكتب ما تبحث عنه "
      style="direction: rtl; border: none; margin-right: 30px"
    />
  </div>
</template>
<style scoped>
.search {
  border: 2px solid #288d37;

  border-radius: 25px;

  margin: auto;
  margin-top: 50px;
  width: 600px;

  display: flex;
  justify-content: center;
  direction: ltr !important;

}
input[type="text"]{
  outline:none;
  width:600px;
  font-size:20px !important;
}
::placeholder{
  color:black;
}
.search .buttonSearch {
  border-radius: 20px;
  background-color: #288d37;
  padding: 5px 30px;
  font-size: 22px;
  color: white;
  border: none;
}
</style>
