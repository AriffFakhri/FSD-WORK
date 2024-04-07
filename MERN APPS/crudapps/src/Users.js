import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001') //send get req to fetch the user data from the server
            .then(result => setUsers(result.data)) //state var uses to fetch the use data
            .catch(err => console.log(err)) //handle error that occur while fetching data

    }, [])

    function handleDelete(id) {
        axios.delete(`http://localhost:3001/deleteUser/${id}`)
            .then(res => {   //handle success deletion
                console.log(res) //log response data to console
                window.location.reload() //reload page to reflect changes
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white p-3 rounded'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table>
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>

                                <Link to={`/update/${user._id}`} className='btn btn-success m-3'>Update</Link>
                                <button className='btn btn-danger ml-3' onClick={() => handleDelete(user._id)}>Delete</button>
                            </tr>

                        ))}


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Users