<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <AssignmentOne></AssignmentOne> -->
  <!-- <AssignmentTwo></AssignmentTwo> -->
  <ApiAssignment></ApiAssignment>
 
</template>

<script>
import ApiAssignment from './components/ApiAssignment.vue';

// import AssignmentOne from './components/AssignmentOne.vue';
// import AssignmentTwo from './components/AssignmentTwo.vue';

export default {
  name: 'App',
  components: {
    ApiAssignment,
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
