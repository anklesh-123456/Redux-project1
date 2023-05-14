import React from 'react'
import { useDispatch } from 'react-redux'

const Comp2 = () => {

  const dispatch = useDispatch()
  const remove = () =>{
    dispatch({
      type:"decrement"
    })
  }
  return (
    <div style={{backgroundColor:'green'}}>
      <h1>Component 2</h1>
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default Comp2
