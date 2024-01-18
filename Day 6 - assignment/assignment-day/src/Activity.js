import React from 'react'

function Activity() {
  return (
    <div>
      <center>
        <h1 style={{textAlign:"center"}}>Activity Available!!</h1>

        <h2>Hiking</h2>  
        <img src='hiking.jpg' style={{width:'400px', height:'350px'}}/>
         <p>Immerse yourself in the breathtaking natural beauty surrounding our chalet with our extensive hiking trails. Traverse 
            through lush forests, picturesque meadows, and discover hidden gems as you breathe in the crisp mountain air.
            Whether you're a seasoned hiker or a casual stroller, our well-marked trails cater to all levels. 
            Unwind with family and friends, witness panoramic views, and create lasting memories as you explore the diverse landscapes.</p>

        <h2>Camping</h2>
        <img src='camping.jpg' style={{width:'400px', height:'350px'}}/>
        <p>Embark on an unforgettable camping experience under the starlit skies at our chalet. Nestled in the heart of nature,
            our campsites offer a perfect escape from the hustle and bustle of city life.Facilities: Enjoy the serenity of the great outdoors 
            with our well-equipped camping facilities. Set up your tent or opt for a cozy cabin, and relish the warmth of a crackling campfire
            as you share stories and laughter with loved ones.</p>

        <h2>River and Pool Swimming </h2>
        <img src='river.jpg' style={{width:'400px', height:'350px', margin:'20px'}}/>
        <img src='pool.jpg' style={{width:'400px', height:'350px', margin:'20px'}}/>
        <p>Dive into relaxation with our on-site swimming facilities. Whether it's a refreshing morning swim or a leisurely afternoon
           dip, our crystal-clear waters provide a soothing escape.Our chalet offers well-maintained swimming pools suitable for both adults and
          children. Enjoy the tranquility of the surroundings as you bask in the sun or unwind poolside with a cool beverage.</p>
      </center>
    </div>
  )
}

export default Activity