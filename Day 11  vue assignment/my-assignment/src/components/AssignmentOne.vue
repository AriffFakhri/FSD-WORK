<template>
    <div>
      <form @submit.prevent="getdata">
        <h1>Form</h1>
        <label>Your Email</label><br>
        <input type="text" placeholder="Enter Your Email" v-model="email" /><br><br>
        
        <label>Password</label><br>
        <input type="password" placeholder="Enter password" v-model="password" /><br><br>
        
        <label>Your IC</label><br>
        <input type="text" placeholder="Enter Your IC" v-model="ic" /><br><br>
        
        <button type="submit">Get Values</button><br><br>
      </form>
  
      <div>
        <table v-if="data">
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>IC</th>
          </tr>
          <tr>
            <td>{{ data.email }}</td>
            <td>{{ data.password }}</td>
            <td>{{ data.ic }}</td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AssignmentOne",
    data() {
      return {
        email: null,
        password: null,
        ic: null,
      
      };
    },
    methods: {
      getdata() {
        this.data = {
          email: this.email,
          password: this.password,
          ic: this.ic,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: turquoise;
  }
  form {
    text-align: center;
  }
  </style>

  