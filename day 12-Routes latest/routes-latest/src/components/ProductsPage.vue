<template>

<div id="app">
<h1>Our Products</h1>
<table>
<tr>
 <th>Id</th>
 <th>Email</th>
 <th>First Name</th>
 <th>Last Name</th>
 <th>Product Image</th>
 </tr>
 <tr class="item" v-for="item in list" :key="item.id">

 <td>{{ item.id }}</td>
<td>{{ item.title}}</td>
 <td>{{ item.price}}</td>
<td>{{ item.description}}</td>
 <td><img :src="item.image"/></td>
 </tr>

</table>
</div>

</template>

<script>

import axios from "axios";
export default {
name: 'App',
data(){
return{
list :[]
 }
},
// async mounted(){
// let result = await axios.get("https://fakestoreapi.com/products");
// console.warn(result.data.data);
// this.list = result.data.data;
// }
async mounted() {
    try {
      let result = await axios.get("https://fakestoreapi.com/products");
      console.warn(result.data);
      this.list = result.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
}
}

// export default {
//         name:'ProductsPage',
// }


</script>


<style>

#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin-top: 20px;
}

h1 {
  color: #333;
}

table {
  width: 90%;
  margin: auto;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  background-color: rgb(232, 203, 90);
}

th {
  background-color: greenyellow;
}

tr:hover {
  background-color: yellow;
  cursor: pointer;
}


.item img {
  max-width: 100%;
  /* max-height: 300px; */
  border-radius: 5px;
}

</style>
