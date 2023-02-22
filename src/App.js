import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Animals from "./components/Animals";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={(<h1>Test</h1>)} />
        <Route path="/imperative-animal-list" element={(<Animals />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
