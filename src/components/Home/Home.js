import "./Home.scss";
import { useSelector } from "react-redux";
import { Routes, Route, } from 'react-router-dom'
import Nav from "../Nav/Nav";
import PrincipalPage from "../PrincipalPage/PrincipalPage";
import Account from "../Account/Account";

const Home = () => {
  return (
    <div className="cmp-hero">
      <Nav />
      <Routes>
        <Route path='/home' element={<PrincipalPage />} exact />
        <Route path='/account' element={<Account />} exact />
      </Routes>
    </div>
  );
};
export default Home;
