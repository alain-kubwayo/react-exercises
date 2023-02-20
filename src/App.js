import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={(<h1>Test</h1>)} />
        <Route path="/form" element={(<Form />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
