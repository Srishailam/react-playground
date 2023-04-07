import React from 'react';
import MenuItems from './components/MenuItems';
import SwitchToggle from './components/SwitchToggle';
import Timer from './components/Timer';
import Game from './components/Game';

import './App.css';

const App = () => {
  return (
    <div className='main'>
      {/* <MenuItems /> */}
      {/* <SwitchToggle /> */}
      {/* <Timer /> */}
      <Game />
    </div>
  )
}

export default App;
