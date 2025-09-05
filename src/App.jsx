import react from 'react'
import Header from './component/Header'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'
import './App.css'
import firebase from 'firebase/compat/app'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
    </div>
  )
}

export default App
 