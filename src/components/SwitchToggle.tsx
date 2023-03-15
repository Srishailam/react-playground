import React from 'react'
// react swtich toggle component
const SwitchToggle = () => {
  const [toggle, setToggle] = React.useState(false)

  const handleToggle = () => {
    setToggle(prev => !prev)
  }

  return (
    <div>
      <h1>Switch Toggle</h1>
      <label className='switch'>
        <input type="checkbox" checked={toggle} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
        {toggle ? 'ON' : 'OFF'}
    </div>
  )
}

export default SwitchToggle