import React from 'react'
import { useTimer } from 'use-timer'
import './App.css'


function App() {

  const timer = useTimer({ initialTime: 0 });

  const newTime = (time) => {
    const seconds = Math.floor(time / 1000);
    const milliseconds = Math.floor((time % 1000) / 100);
    return `${seconds}.${milliseconds}`;
  
  }
  
  return (
   <>
   <div id="timer">{newTime(timer.time)}</div>
      <div id="buttons">
        <button onClick={timer.start} disabled={timer.isRunning}>
          Start
        </button>
        <button onClick={timer.pause} disabled={!timer.isRunning}>
          Pause
        </button>
        <button onClick={timer.reset}>Reset</button>
      </div>  
  </>
  )
}

export default App