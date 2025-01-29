import './index.css';
 import {QueryClient,
   QueryClientProvider, } from '@tanstack/react-query';
 const queryClient = new QueryClient()
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import Contact from "./pages/contact/Contact";
import Todos from "./pages/todos/Todos";
//import Sidebar from "./components/Sidebar";
function App() { 
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex min-h-screen bg-gray-100">
          {/* <Sidebar /> */}
          <div className="flex-1 flex flex-col">
            <Navbar />
            <div className="container mx-auto p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/todos" element={<Todos />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
