<template>
  <div class="Counter">
    <h1>Vue Counter</h1>
    <p>Current Count: {{ count }}</p>
    
    <br><br>
    
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
   
  </div>
</template>

<script>
export default {
  name: "AssignmentTwo",
  data() {
    return {
      count: 0,
      
    };
  },
  methods: {
    increment() {
      this.count++;
      
    },
    decrement() {
      this.count--;
    }
  }
};
</script>

<style>
/* Your styles go here */
</style>
