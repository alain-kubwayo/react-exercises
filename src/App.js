import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Jokes from "./components/Jokes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={(<h1 className="flex items-center justify-center h-[50vh] text-2xl font-bold text-sky-900 uppercase">Welcome, click the link to visit the exercise</h1>)} />
        <Route path="/jokes" element={<Jokes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
