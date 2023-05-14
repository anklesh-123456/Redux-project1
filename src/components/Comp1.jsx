import React from 'react'
import { useDispatch } from 'react-redux'

const Comp1 = () => {
  const dispatch = useDispatch();
  const add = () =>{
    dispatch({
      type:'increment'
    })
  }
  const addByFive = () =>{
    dispatch({
      type:'incrementByvalue',
      payload : 5
    })
  }
  return (
    <div style={{backgroundColor:'yellow'}}>
      <h1>Component 1</h1>
      <button onClick={add}>Add</button>
      <button onClick={addByFive}>AddByFive</button>
    </div>
  )
}

export default Comp1