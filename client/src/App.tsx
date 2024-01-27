import {Outlet, useLocation} from "react-router-dom";
import Navbar from "./components/Navbar";
import {ToastContainer} from "react-toastify";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
    const  {pathname} = useLocation();

    const isLogin = pathname === '/login' || pathname === '/registration'

  return (
    <div>
        <Navbar  />
        <ToastContainer />
        <div>
            <Outlet />
        </div>
        {!isLogin &&  <Footer />}
    </div>
  )
}

export default App
