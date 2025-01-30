import './App.css'
import {QueryClient,
  QueryClientProvider, } from '@tanstack/react-query';
  import { Routes, Route } from "react-router-dom";
  import Navbar from "./components/Navbar";
  import Home from "./pages/home/Home";
  import About from "./pages/about-us/AboutUs";
  import Contact from "./pages/contact/Contact";
import Todos from './pages/todos/Todos'

const queryClient = new QueryClient()
function App() { 
  return (
    <>
    <QueryClientProvider client={queryClient}>     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </QueryClientProvider>
    </>
  )
}

export default App
