<template>

<center>
       
        <form @submit.prevent="submitForm" class="ContactForm" >
            <h1>Contact Us</h1>
            <div class="mb-3">
                <label for="name" class="form-label">Your Name</label><br>
                <input  type="text" class="form-control" v-model="name" required>
            </div>


            <div class="mb-3">
                <label for="email" class="form-label">Your Email</label><br>
                <input type="email" class="form-control" v-model="email" required>
            </div>
            <div>
                <label for="reservationDate" class="form-label">Reservation Date</label><br>
                <input type="date" class="form-control" v-model="date" required>
            </div>


            <div class="mb-3">
                <label for="message" class="form-label">Your Message</label><br>
                <textarea class="form-control" required></textarea>
            </div>


            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </center>  

</template>

<script>

export default {
    name: "ContactUs",


    data() {
        return {
            name: "",
            email: "",
            date: "",
            message: "",
        }
    },
    methods: {
        submitForm() {
            console.log('Reservation have submitted!')
        }
    }
}


// export default {
//         name:'ContactUs',
// }


</script>

<style scoped>
#app {
    text-align: center;
    margin-top: 30px;
}


.ContactForm {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    width: 40%;
    height: 60%;
    margin-top: 80px;
    display: block;
    text-align: center;
    box-shadow: 5px 10px;
    font-size: 20px;



}


.form-group {
    margin-bottom: 20px;
}


label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
}


input,
textarea,
select {
    width: 80%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    margin-top: 4px;
    margin-bottom: 12px;
}


button {
    width: 80%;
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 50px;
    margin-top: 15px;
}


button:hover {
    background-color: grey;
}
</style>