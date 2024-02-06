import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[color, setColor] = useState('olive')

  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center buttom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
          style={{background:'red'}}
          >Red</button>
             <button 
              onClick={() => setColor('blue')}
          className='outline-none px-4 py-1  rounded-full shadow-lg text-black'
          style={{background:'blue'}}
          >blue</button>
            <button 
              onClick={() => setColor('green')}
          className='outline-none px-4 py-1  rounded-full shadow-lg text-black'
          
          style={{background:'green'}}
          >green</button>
          <button 
              onClick={() => setColor('pink')}
          className='outline-none px-4 py-1  rounded-full shadow-lg text-black'
          style={{background:'pink'}}
          >pink</button>
          <button 
              onClick={() => setColor('violet')}
          className='outline-none px-4 py-1  rounded-full shadow-lg text-black'
          style={{background:'violet'}}
          >violet</button>
          <button 
              onClick={() => setColor('orange')}
          className='outline-none px-4 py-1  rounded-full shadow-lg text-black'
          style={{background:'orange'}}
          >orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
