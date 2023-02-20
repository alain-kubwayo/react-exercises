import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AnimalsList from "./components/AnimalsList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={(<h1>Test</h1>)} />
        <Route path="/animal-list" element={<AnimalsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
