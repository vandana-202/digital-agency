import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <BrowserRouter>

      <Routes>

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