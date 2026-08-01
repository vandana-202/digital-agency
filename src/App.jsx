import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Contact from "./components/Contact";



function App() {
  return (
    <BrowserRouter>

      <Routes>
        
        
  

        {/* Landing Page */}
        <Route 
          path="/" 
          element={<Home />} 
        
        />
        <Route path="/contact" element={<Contact/>} />


        {/* Dashboard Page */}
        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />


      </Routes>

    </BrowserRouter>
  );
}

export default App;