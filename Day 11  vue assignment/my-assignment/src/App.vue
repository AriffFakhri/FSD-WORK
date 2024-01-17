<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <AssignmentOne></AssignmentOne>
  
 
</template>

<script>
import AssignmentOne from './components/AssignmentOne.vue';


export default {
  name: 'App',
  components: {
    AssignmentOne,
   
  }
}
</script>

<style>
 #app {
  text-align: center;
  padding: 20px;
  background-color: black;
  color: white;
}
.Counter button{
  margin-left: 20px;
  align-items: center;
  background-color: aqua;
  font-size: 30px;
  color: white;
  padding: 10px;

}
</style>
