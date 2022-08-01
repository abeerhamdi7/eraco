<template>
  <form class="container ">
  <div class="containerLogin">
    <div class="input">
      <label>user Name :</label>
     <input type="text" placeholder="please enter name">
    </div>
  <div class="input">
    <label>password :</label>
     <input type="password" placeholder="please enter password">
  </div>
  <button>login</button>
  </div>
  </form>

  </template>
</template>
<style scoped>
.container{
  background: white;
}
.containerLogin{
  margin:auto;
margin-top:200px !important;
margin-bottom:100px;

  width:550px !important;
  direction: ltr;
  color:black;

}
label{
  font-weight:bold;
}
.input{
  display: flex;

  justify-content: space-between;
  margin-bottom: 20px;

}
input[type=text],input[type=password],button{
  border-radius:10px;
  font-size: 18px;
  width:350px;
  border:1px solid grey;

}
button{
width:100px;
margin-left:230px !important;
}

</style>
