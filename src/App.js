import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={(<h1>Test</h1>)} />
        <Route path="/counter" element={(<Counter />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
