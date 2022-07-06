import "./Home.scss";
import { useSelector } from "react-redux";
import { Routes, Route, } from 'react-router-dom'
import Nav from "../Nav/Nav";
import PrincipalPage from "../PrincipalPage/PrincipalPage";

const Home = () => {
  return (
    <div className="cmp-hero">
      <Nav />
      <Routes>
        <Route path='/Home' element={<PrincipalPage />} exact />
      </Routes>

    </div>
  );
};

export default Home;
