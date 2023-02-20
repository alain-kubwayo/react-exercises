import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/hello-world" element={<HelloWorld />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
