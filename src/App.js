import { BrowserRouter as Router, Route, Routes, useActionData } from "react-router-dom";
import './App.css';
import Inventory from './pages/Inventory.js'
import Login from './pages/Login.js'
import PrintableSheet from "./pages/PrintableSheet";
import Sheet from "./pages/Sheet";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/inventory" element={<Inventory />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/printableSheet" element={<PrintableSheet />}/>
          <Route path="/sheet" element={<Sheet />}/>
        </Routes>
    </div>
  );
}

export default App;
