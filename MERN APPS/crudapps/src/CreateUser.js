import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function CreateUser() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    function submit(e) {
        e.preventDefault(); //prevent default form submission behaviour
        axios.post("http://localhost:3001/createUser", { name, email, age }) //to create a new user
            .then(result => {
                console.log(result)
                navigate('/') //to navigate the particular component
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={submit}>
                    <h2> Add user</h2>
                    <div className='mb-2'>
                        <label>Name</label>
                        <input type='text' placeholder='Enter name' className='form-control' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label>Email</label>
                        <input type='email' placeholder='Enter email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label>Age</label>
                        <input type='number' placeholder='Enter name' className='form-control' onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default CreateUser