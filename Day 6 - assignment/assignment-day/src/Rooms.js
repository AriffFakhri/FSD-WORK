import React from 'react'

function Rooms() {
  return (
    
    <div className='room'>
        <center>
        <div>
        <h1 style={{color:"blue", textAlign:"center"}}>This is our Rooms Available</h1>
        </div>

        <div className='box'>
        <img src='classic-room.jpg' style={{width:"400px", height:"400px"}} />
        <h2>Classic Room </h2>
        <p>2 GUEST 220 MYR / PER NIGHT 38 m²</p>
        </div>

        <div className='box2'>
        <img src='deluxe-room.jpg' style={{width:"400px", height:"400px"}} /> 
        <h2>Deluxe Room</h2>
        <p>2 GUEST 400 MYR / PER NIGHT 38 m²</p>
        </div>

        <div className='box3'>   
        <img src='villa-room.jpg' style={{width:"400px", height:"400px"}} />
        <h2>Villa Room</h2>
        <p>2 GUEST 220 MYR / PER NIGHT 60 m²</p>
        </div>
        
        <div className='box4'> 
        <img src='suite-room.jpg' style={{width:"400px", height:"400px"}} />
        <h2>Suite Room</h2> 
        <p>2 GUEST 500 MYR / PER NIGHT 52m²</p>
        </div>
        </center>
    </div>
    
  )
}

export default Rooms