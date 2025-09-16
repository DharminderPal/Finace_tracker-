import react from 'react'
import Header from './component/Header'
// import Signup from './pages/Signup'
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
        <Route path="/" element={<SingupinComponent />} />
        <Route path="/Header" element={<Header />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  );
  
}



export default App
 