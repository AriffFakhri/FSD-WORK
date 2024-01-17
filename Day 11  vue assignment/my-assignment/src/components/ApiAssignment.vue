<template>
   
    
   
    <h1>Api</h1>
    <ul class="item" v-for="item in list" :key="item.id">
  <li >{{ item.id }}</li>
  <li >{{ item.title }}</li>
  <li >{{ item.price}}</li>
  <li >{{ item.description}}</li>
  <li ><img :src="item.image"></li>
  
    </ul>
  </template>
  
  <script>
  
  import axios from 'axios' 
  
  
  export default {
    name: "ApiAssignment",
    data() {
      return {
        list: []
      }
    },
    async mounted (){
      let result = await axios.get("https://fakestoreapi.com/products");
      console.warn (result.data.data);
      this.list = result.data.data;
    }
    
    
    }
  
  </script>
  
  <style scoped>
  ul {
      list-style: none;
      padding: 0;
    }
  
    li {
      margin: 10px 0;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  
  </style>
  
  