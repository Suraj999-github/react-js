import './App.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//import { Button } from 'primereact/button';
//import { Panel } from 'primereact/panel';
import {QueryClient,
  QueryClientProvider, } from '@tanstack/react-query';
  //import { Routes, Route } from "react-router-dom";
  import { Routes, Route, Navigate} from "react-router-dom";
  import Navbar from "./components/Navbar";
  import Home from "./pages/home/Home";
  import About from "./pages/about-us/AboutUs";
  import Contact from "./pages/contact/Contact";
import Todos from './pages/todos/Todos'
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import UseStateEg from "./pages/practise/UseStateEg";
import {presentYear} from "./utils/companyInfo";
import PropTypes from "prop-types";
import {useAuth} from "./hooks/useAuth.jsx";
import {Toast} from "primereact/toast";
import useToaster from "./hooks/useToaster.js";

const queryClient = new QueryClient()

const AuthLayout = ({ children }) => (
  <div className="bg-gray-100 col-12 p-1">
      {/* Navbar as Header */}
      <div className="bg-white shadow">
        <Navbar />
        <div className="p-1 col-12">
        {children}
        <div className="p-col-12 p-md-4">
        <h5>Company Name</h5>
        <p>© {presentYear()} Your Company</p>
      </div>
      </div>
      </div>    
    </div>
);

const PublicLayout = ({ children }) => (
  <div className="col-12 p-1">
   {children}
   <div className="p-col-12 p-md-4">
        <h5>Company Name</h5>
        <p>©{presentYear()} Your Company</p>
      </div>
  </div>
);
AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
    const {isAuthenticated} = useAuth()
  return (
      <QueryClientProvider client={queryClient}>
            <div className="col-12">
                <div className="container">
                  <Routes>
                    {/* Public Routes (No Navbar) */}
                    <Route path="/signin" element={<PublicLayout><SignIn /></PublicLayout>} />
                    <Route path="/signup" element={<PublicLayout><SignUp /></PublicLayout>} />

                     {/* Protected Routes (With Navbar) */}
                    <Route path="/" element={isAuthenticated() ? <AuthLayout><Home /></AuthLayout> : <Navigate to="/signin" />} />
                    <Route path="/about" element={isAuthenticated() ? <AuthLayout><About /></AuthLayout> : <Navigate to="/signin" />} />
                    <Route path="/contact" element={isAuthenticated() ? <AuthLayout><Contact /></AuthLayout> : <Navigate to="/signin" />} />
                    <Route path="/todos" element={isAuthenticated() ? <AuthLayout><Todos /></AuthLayout> : <Navigate to="/signin" />} />

                      {/* projects*/}
                      <Route path="/usestateeg" element={isAuthenticated() ? <AuthLayout><UseStateEg /></AuthLayout> : <Navigate to="/usestateeg" />} />
                  </Routes>
                </div>

            </div>
    </QueryClientProvider>
  )
}

export default App
