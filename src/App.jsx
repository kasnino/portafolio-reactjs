import { useState } from 'react'
import './App.css'
import { FaBeer } from 'react-icons/fa';
import  Header  from './components/Header'


function App() {
  const [count, SetCount] = useState(2)

  return (
    <div className="App">
      <Header/>
      <header className="App-header">
      
        <p>
      
        <FaBeer color="#fff000"/>
        Hello Vite + React! 
        </p>
        <p>
          <button type="button" onClick={() => SetCount(count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <button type="button" onClick={(count) => SetCount(count = 0)} >
            Reiniciar
          </button>
        </p>
       
      </header>
    </div>
  )
}

export default App
