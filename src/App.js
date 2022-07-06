import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Carousel } from './components/Carousel/Carousel';
import Home from './components/Home/Home';



export default function App() {
  return (
    <BrowserRouter>
    <Carousel />
      <Routes>
        <Route path='/' element={<Home />} exact />

      </Routes>
    </BrowserRouter>
  );
}
