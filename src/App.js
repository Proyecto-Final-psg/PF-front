import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Landing from './components/Landing/Landing'

import Home from './components/Home/Home';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} exact />
        <Route path='/*' element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
}
