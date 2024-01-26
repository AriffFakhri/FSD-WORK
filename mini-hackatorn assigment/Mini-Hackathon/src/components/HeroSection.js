import React from 'react'
import '../App.css'
import { Button } from './Button_Zul'
import './HeroSection.css'

function HeroSection(){
  return (
    <div className='hero-container'>
        <video src='/videos/coffeeHero.mp4' autoPlay loop muted />
        <h1>HOMEBREWED</h1>
        <p>Coffee Is So Much More, It Almost Doesn't Make Sense </p>
        <div className='hero-btns'>
            <Button 
                className='btn'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={console.log('hey')}
            >
              SHOP NOW <i className='far fa-play-circle'/>
            </Button>
        </div>
    </div>
  );
}

 export default HeroSection;