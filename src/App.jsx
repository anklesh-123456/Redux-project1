import './App.css'
import React from 'react'
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
import Comp3 from './components/comp3';


const App = () => {
  return (
    
    <>
     <div className='container'>
      <Comp1/>
      <Comp2/>
      <Comp3/>
     </div>
      </>
  )
}

export default App;