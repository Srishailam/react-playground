import React, { useEffect, useRef, useState } from 'react'

const styles = {
  timer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: 'black',
    FlexDirection: 'column',
  },
  time_MM_SS: {
    fontSize: '5rem',
    marginTop: '2rem',
  },
}

const Timer = () => {
const inputElement = useRef(null);
const [counter, setCounter] = useState(0);
const [timer, setTimer] = useState('00:00');

 useEffect(() => {
    const timer = setTimeout(() => {
      if (counter > 0) {
         let minutes: string | number  = Math.floor(counter / 60);
         let seconds: string | number = counter - minutes * 60;

          minutes = minutes < 10 ? `0${minutes}` : minutes;
          seconds = seconds < 10 ? `0${seconds}` : seconds;
          setTimer(`${minutes}:${seconds}`);
          setCounter(counter - 1);
      } else {
        setTimer('00:00');
        // set input empty
        const input = inputElement.current || null;
        // @ts-ignore
        input.value = '';
        window.alert('Time is up!');
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    }

  }, [counter]);

  const handleStartClick = () => {
    const input = inputElement.current || null;
    // @ts-ignore
    const minutes = input ? parseInt(input.value) : 0;
    setCounter(minutes * 60);
  };

  const handleResetClick = () => {
    setTimer('00:00');
    setCounter(0);
    window.alert('Timer reset!');
  };


  return (
    <div className='timer' style={
      {
        ...styles.timer,
        flexDirection: 'column',
      }}>
      <h1>Timer</h1>
      <input type='text' ref={inputElement} />
      <button
        onClick={handleStartClick}
      >Start</button>
      <button
        onClick={handleResetClick}
      >Reset</button>

      <div className='time_MM:SS' style={
        { ...styles.time_MM_SS, 
          color: counter > 10 ? 'black' : 'red', 
          fontWeight: counter > 10 ? 'normal' : 'bold',
        }
      }>
        {timer}
      </div>
    </div>
  )
}

export default Timer