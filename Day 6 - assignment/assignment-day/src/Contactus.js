import React, { useState } from 'react';

function Contactus() {
  
  return (
    <center>
      <h1>Contact Us </h1>
    <form>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder='Enter Your Name'
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder='Enter Your Email Adress'
        required
      />

      <label htmlFor="tel">Telephone Number:</label>
      <input
        type="tel"
        id="tel"
        name="tel"
        placeholder='Enter Your Telephone number'
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        required
        placeholder='Write any messages tO Us'
        rows="8"
        cols="50"
        

      />
      <br></br>
      <button type="submit">Submit</button>
    </form>
    </center>

  );
}

export default Contactus;