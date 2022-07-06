import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero/Hero';
import Landing from './components/Landing/Landing'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} exact />
      </Routes>
    </BrowserRouter>
  );
}
