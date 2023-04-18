import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout.js';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
         <Routes>
          <Route path="/Checkout" element={<Checkout  />}> </Route>

          <Route path="/" element={<Home />}>   </Route>
         </Routes>
      </div>
    </Router>
      
  );
}

export default App;