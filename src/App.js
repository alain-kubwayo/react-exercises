import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello-world" element={<HelloWorld />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
