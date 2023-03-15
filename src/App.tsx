import React from 'react';
import MenuItems from './components/MenuItems';
import SwitchToggle from './components/SwitchToggle';
import Timer from './components/Timer';

import './App.css';

const App = () => {
  return (
    <div className='main'>
      {/* <MenuItems /> */}
      {/* <SwitchToggle /> */}
      <Timer />
    </div>
  )
}

export default App;
