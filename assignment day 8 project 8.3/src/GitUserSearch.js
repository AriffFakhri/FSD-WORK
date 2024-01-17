import React, { useState } from 'react'

function GitUserSearch() {
    const [username, setusername] = useState('');

    const [userdata, setuserdata]= useState(null);

    const fetchuserdata = async ()=>{
        try{
            const response = await fetch (`https://api.github.com/users/${username}`) 
            const data = await response.json();
            setuserdata(data);
        } catch (error){
            console.error('error fetching userdata:', error);
        }
    }


  return (
    <div>
        <center>
        <h1>Github user search</h1>
        <div>
            <input type='text' value={username} onChange={(e)=> setusername(e.target.value)} />

            <button onClick={fetchuserdata}>Search</button>
            
        </div>
        </center>
        {userdata && (
            <div> 
            <h2>{userdata.login}</h2>
            <img src={userdata.avatar_url} alt="User Avatar" style={{width:'60px'}} />
            <p>Followers:{userdata.followers}</p>
            <p>Repos:{userdata.public_repos}</p>
            <p>{userdata.subscriptions_url}</p>
            <p>{userdata.type}</p>
            <p>{userdata.repos_url}</p>
            <p>{userdata.gists_url}</p>
        </div>
        )

        }

    </div>
  )
}

export default GitUserSearch