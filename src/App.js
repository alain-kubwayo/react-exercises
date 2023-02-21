import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AlertButton from "./components/AlertButton";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={(<h1>Welcome</h1>)} />
        <Route path="/capture-user-clicks" element={<AlertButton /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
