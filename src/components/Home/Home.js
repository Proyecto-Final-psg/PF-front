import "./Home.scss";
import { useSelector } from "react-redux";
import { Routes, Route, } from 'react-router-dom'
import Nav from "../Nav/Nav";
import PrincipalPage from "../PrincipalPage/PrincipalPage";
<<<<<<< HEAD
import Account from "../Account/Account";
=======
import { CardDetails } from "../CardDetails/CardDetails";
import { EditCard } from "../EditCard/EditCard";
>>>>>>> 5de03566ec7ac326d5dc8bb0c0d2683623b7eecf

const Home = () => {
  return (
    <div className="cmp-hero">
      <Nav />
      <Routes>
        <Route path='/home' element={<PrincipalPage />} exact />
<<<<<<< HEAD
        <Route path='/account' element={<Account />} exact />
=======
        <Route path='/products/:id' element={<CardDetails />} />
        <Route path='/products/edit/:id' element={<EditCard />} />
>>>>>>> 5de03566ec7ac326d5dc8bb0c0d2683623b7eecf
      </Routes>
    </div>
  );
};
export default Home;
