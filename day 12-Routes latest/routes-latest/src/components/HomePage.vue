<template>

<p>Welcome To My Homepage</p>


<h1 style="color: black; font-size: 50px;"> Find Your <br> <span>Best Outfit</span> </h1>

<p style="font-size: 30px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eos, nemo tempore commione magni eius ut!</p>

<button style="height: 30px; font-size: 25px; width: 150px; border-radius: 5px; background-color: aquamarine;" > Shop Now</button>

</template>

<script>

export default {
        name:'HomePage',
}

</script>

<style >

p{
        font-size: 50px;
}

body{
  background-image: url('@/assets/pic1.avif') ; 
  background-repeat: no-repeat;
  margin: 0; 
  background-size: cover;
}
span{
        font-size: 80px;
        color: green;
        

}

</style>