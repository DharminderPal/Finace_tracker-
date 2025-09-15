import react from 'react'
import Header from './component/Header'
import Signup from './pages/Signup'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import SingupinComponent from './component/SignupSignin'
import firebase from 'firebase/compat/app'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Signup" element={<SingupinComponent />} />
      </Routes>
    </BrowserRouter>
    </>
  );
  
}



export default App
 