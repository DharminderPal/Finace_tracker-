import react from 'react'
import Header from './component/Header'
import Signup from './component/SignupSignin'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import './App.css'
import firebase from 'firebase/compat/app'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App
 