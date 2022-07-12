import { Routes, Route, HashRouter } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
export default function App() {
  return (
    <HashRouter>
      
      <Routes>
        <Route path='/' element={<Landing />} exact />
        <Route path='/*' element={<Home />} exact />
      </Routes>
    </HashRouter>
  );
}
