import React, { useState } from 'react'

function Assignment() {
    const [username, setusername] = useState('');

    const [userdata, setuserdata]= useState(null);

    const fetchuserdata = async ()=>{
        try{
            const response = await fetch (`https://dummy.restapiexample.com/api/v1/employees${username}`) 
            const data = await response.json();
            setuserdata(data);
        } catch (error){
            console.error('error fetching userdata:', error);
        }
    }


  return (
    <div>
        <h1>Employee details</h1>
        <div>
            <input type='text' value={username} onChange={(e)=> setusername(e.target.value)} />

            <button onClick={fetchuserdata}>Search</button>
        </div>

        {userdata && (
            <div> 
            <h2>name:{userdata.employee_name}</h2>
            <img src={userdata.profile_image} alt="User Pic" style={{width:'60px'}} />
            <p>Age:{userdata.employee_age}</p>
            <p>Salary:{userdata.employee_salary}</p>
            </div>
        )

        }

    </div>
  )
}

export default Assignment