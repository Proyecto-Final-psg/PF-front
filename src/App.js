import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact />

      </Routes>
    </BrowserRouter>
  );
}
