import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero/Hero';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} exact />
       
      </Routes>
    </BrowserRouter>
  );
}
