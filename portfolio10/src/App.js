import logo from './logo.svg';
import './App.css';
import Index from './pages';
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />}></Route>
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
