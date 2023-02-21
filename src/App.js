import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={(<h1>Test</h1>)} />
        <Route path="/custom-component" element={<ButtonsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
