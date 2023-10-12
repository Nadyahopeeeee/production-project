import React, { useState } from 'react'
import classes from './Counter.module.scss'

import '../index.scss'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 2)
  }

  return (
    <div className="app">
      Gooooo
      <h1>{count}</h1>
      <button onClick={increment} className={classes.btn}>inc</button>
    </div>
  )
}

export default Counter
