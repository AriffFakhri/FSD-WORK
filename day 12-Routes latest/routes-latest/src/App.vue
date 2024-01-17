<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <!-- <a href="./components/Home.vue">Home</a>
  <a href="./components/Products.vue">Products</a>
  <a href="./components/ContactUs.vue">Contact Us</a> -->
  <div class="container">
    <div id="navbar">
      <router-link to="/">Home Page</router-link>
      <router-link to="/product">Products</router-link>
      <router-link to="/contact">Contact Us</router-link>

    </div>
  </div>
  <router-view></router-view>
</template> 


<script>
import { RouterLink } from 'vue-router';


export default {
  name: 'App',
  components: {

    RouterLink
  }
}
</script>





<style>
.container {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  max-width: 800px;
  margin: auto;
}

#navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #439f7a;
  padding: 20px;
  max-width: 100%;
  list-style-type: none;
}

#navbar router-link {
  text-decoration: none;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
}

#navbar router-link:hover {
  background-color: rgb(213, 213, 132);
  cursor: pointer;
}

body {
  background-color: rgba(197, 76, 138, 0.8);
  margin: 0;
}
</style>