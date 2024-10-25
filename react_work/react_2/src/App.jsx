import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Products from './components/Products'
import Shoppinglist from './components/Shopping'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
<Shoppinglist/>
      </div>
    </>
  )
}

export default App
