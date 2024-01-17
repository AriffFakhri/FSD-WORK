import React, { useState } from 'react'
import userData from './data'
import './App.css'


function App() {
  const [users, setusers] = useState(userData);

  // ()=> to pass the initial value
  // FIRST VARIABLE IS RESPONSIBLE TO HOLD ALL THE DATA
  // second variable is responsible to manipulate or change the data
  return (
    <>

    {/* <center>
    <h1>You click this button {press} times</h1>
    <button onClick={()=> setpress(press + 1)}>Click me!</button>
    </center> */}

    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>City</th>
      </tr>
      {
        users.map((used) =>(
        <tr>
          <td>{used.id}</td>
          <td>{used.name}</td> 
          <td>{used.email}</td>
          <td>{used.city}</td>
          </tr> 
        ))        
      }
    </table>
    </>
  
  )
  }

  export default App