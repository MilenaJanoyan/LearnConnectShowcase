import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";
import {ToastContainer} from "react-toastify";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  return (
    <div>
        <Navbar  />
        <ToastContainer />
        <div>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default App
