<!-- 

<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div id="app">
    <h1>Recipe app</h1>
    <div v-if="selectedRecipe">
      <button @click="selectedRecipe = null">Back recipe</button>
      <h2>{{ selectedRecipe.title }}</h2>
      <p>{{ selectedRecipe.description }}</p>
    </div>
    <div>
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id">
          <button @click="selectRecipe(recipe)">{{ recipe.title }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      recipes: [
        {
          id: 1,
          title: "Spaghetti",
          description: "here is ur best spaghetti recipe"
        },
        {
          id: 2,
          title: "Noodles",
          description: "here is ur best noodles recipe"
        },
        {
          id: 3,
          title: "Pasta",
          description: "here is ur best pasta recipe"
        },
      ],
      selectedRecipe: null,
    }
  },
  methods: {
    selectRecipe(recipe) {
      this.selectedRecipe = recipe;
    }
  }
}

</script>

<style>
#app{
  text-align: center;
  margin-top: 60px;

}
button{
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
}
ul{
  list-style: none;
  padding: 0;
}
li{
  margin-bottom: 10px;
}

</style>
 -->


 <template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div id="app">
    <h1>Checkout form</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="formData.name" type="text" id="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="formData.email" type="email" id="email" required>
      </div>
      <div class="form-group">
        <label for="address">Shipping Address</label>
        <textarea v-model="formData.address" type="text" id="address" required></textarea>
      </div>
      
      <div class="form-group">
        <label for="creditCard">Credit Card</label>
        <input v-model="formData.creditCard" type="text" id="creditCard" required>
      </div>
      <div class="form-group">
        <label for="message">Message for Seller</label>
        <textarea v-model="formData.message" type="text" id="message"></textarea> 
      </div>
      <button type="submit">Submit order</button>
      
    </form>
    <div v-if="orderSubmitted">
      <h2>Order submitted!</h2>
      <p><b>Name:</b> {{ formData.name }}</p>
      <p><b>Email:</b> {{ formData.email }}</p>
      <p><b>Shipping Address:</b> {{ formData.address }}</p>
      <p><b>Credit card#:</b> {{ formData.creditCard }}</p>
      <p><b>Message:</b> {{ formData.message }}</p>
      <br> <button @click="clearForm">Reset</button>

      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Shipping Address</th>
        <th>Credit Card</th>
        <th>Message</th>
      </tr>
      <tr>
        <td>{{ formData.name }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
        address: '',
        creditCard: '',

      },
      orderSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      this.orderSubmitted = true;
    },
    clearForm() {
      this.formData = {
        name : '',
        email: '',
        address: '',
        creditCard: '',
        message: '',

      }
    }
  }
}

</script>

<style>
label {
  display: block;
  margin-bottom: 5px;
  margin-bottom: 8px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 10px;
}

button {
  padding: 15px;
  font-size: 15px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}
</style>

