import './App.css';
import Index from './pages';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from './pages/layout';
import PersonajeProvider from './context/personajeContext';
import MasInfo from './pages/masInfo';
import Favorites from './pages/favorites';
import MisCreaciones from './pages/misCreaciones';

function App() {
  return (
    <PersonajeProvider>
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Index />}></Route>
        <Route path='/misCreaciones' element={<MisCreaciones/>}></Route>
        <Route path='/masInfo/:id' element={<MasInfo/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </PersonajeProvider>
   
  );
}

export default App;
