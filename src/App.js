import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AlertButton from "./components/AlertButton";
import Navbar from "./components/Navbar";
import ButtonsContainer from "./components/ButtonsContainer";
import Counter from "./components/Counter";
import Animals from "./components/Animals";
import AnimalsList from "./components/AnimalsList";
import Form from "./components/Form";
import Jokes from "./components/Jokes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={(<h1>Welcome</h1>)} />
        <Route path="/capture-user-clicks" element={<AlertButton /> } />
        <Route path="/custom-component" element={<ButtonsContainer />} />
        <Route path="/counter" element={(<Counter />)} />
        <Route path="/imperative-animal-list" element={(<Animals />)} />
        <Route path="/animal-list" element={<AnimalsList />} />
        <Route path="/" element={(<h1 className="flex items-center justify-center h-[50vh] text-2xl font-bold text-sky-900 uppercase">Welcome, click the link to visit the exercise</h1>)} />
        <Route path="/form" element={(<Form />)} />
        <Route path="/jokes" element={<Jokes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
