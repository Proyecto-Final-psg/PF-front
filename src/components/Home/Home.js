import "./Home.scss";
import { useSelector } from "react-redux";
import { Routes, Route, } from 'react-router-dom'
import Nav from "../Nav/Nav";
import PrincipalPage from "../PrincipalPage/PrincipalPage";
import { CardDetails } from "../CardDetails/CardDetails";

const Home = () => {
  return (
    <div className="cmp-hero">
      <Nav />
      <Routes>
        <Route path='/home' element={<PrincipalPage />} exact />
        <Route path='/products/:id' element={<CardDetails />} />
      </Routes>
    </div>
  );
};
export default Home;
