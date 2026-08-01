import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Contact/>
        
  

        {/* Landing Page */}
        <Route 
          path="/" 
          element={<Home />} 
        
        />


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