import "./Home.scss";

import { Routes, Route, } from 'react-router-dom'
import Nav from "../Nav/Nav";
import PrincipalPage from "../PrincipalPage/PrincipalPage";
import { CardDetails } from "../CardDetails/CardDetails";
import { EditCard } from "../EditCard/EditCard";
import Account from "../Account/Account";
import CreateProduct from "../CreateProduct/CreateProduct";
import Users from "../Users/Users";
import Cart from "../Cart/Cart";

const Home = () => {
  return (
    <div className="cmp-hero">
      <Nav />
      <Routes>
        <Route path='/home' element={<PrincipalPage />} exact />
        <Route path='/products/:id' element={<CardDetails />} />
        <Route path='/products/edit/:id' element={<EditCard />} />
        <Route path='/products/create' element={<CreateProduct />} />
        <Route path='/users' element={<Users />}></Route>
        <Route path='/account' element={<Account />} exact />
        <Route path='/cart' element={<Cart />} exact />
      </Routes>
    </div>
  );
};
export default Home;
