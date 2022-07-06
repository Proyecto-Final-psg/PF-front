import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} exact />
        <Route path='/*' element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
}
