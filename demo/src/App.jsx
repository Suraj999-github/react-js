import './App.css'
import {QueryClient,
  QueryClientProvider, } from '@tanstack/react-query';
  //import { Routes, Route } from "react-router-dom";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Navbar from "./components/Navbar";
  import Home from "./pages/home/Home";
  import About from "./pages/about-us/AboutUs";
  import Contact from "./pages/contact/Contact";
import Todos from './pages/todos/Todos'

const queryClient = new QueryClient()
function App() { 
  return (
    // <>
    // <QueryClientProvider client={queryClient}>     
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/todos" element={<Todos />} />
    //   </Routes>
    // </QueryClientProvider>
    // </>
      <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex min-h-screen bg-gray-100">        
          <div className="flex-1 flex flex-col">
            <Navbar />
            <div className="container mx-auto p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
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
