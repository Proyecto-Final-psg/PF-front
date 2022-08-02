import "./Home.scss";
import { Routes, Route } from 'react-router-dom'
import Nav from "../Nav/Nav";
import PrincipalPage from "../PrincipalPage/PrincipalPage";
import { CardDetails } from "../CardDetails/CardDetails";
import { EditCard } from "../EditCard/EditCard";
import Account from "../Account/Account";
import CreateProduct from "../CreateProduct/CreateProduct";
import Users from "../Users/Users";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import { Metrics } from "../Metrics/Metrics";
import { Bot } from '../Chatbot/Chatbot'
import config from "../Chatbot/Chatbot/config";
import MessageParser from "../Chatbot/Chatbot/MessageParser";
import ActionProvider from "../Chatbot/Chatbot/actionProvider";
import { useState } from 'react'
import { StockManagement } from "../Metrics/StockManagement/StockManagement";
import { MostRequiredProduct } from "../Metrics/MostRequiredProduct/MostRequiredProduct";
import { UserManagement } from "../Metrics/UserManagement/UserManagement";
import { UserCrud } from "../Metrics/UserCRUD/UserCrud";
import { TopCustomers } from "../Metrics/TopCustomers/TopCustomers";
import { Orders } from "../Metrics/Orders/Orders";
import { OrderDetailed } from "../Metrics/Orders/OrderDetailed/OrderDetailed";
import Order from "../Order/Order";
import { About } from "../About/About";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Redux/Actions";
import OrdenCompraDetail from "../OrdenCompraDetail/OrdenCompraDetail";
import Profile from "../Profile/Profile";
import 'animate.css';

const Home = () => {
  const [showBot, setShowBot] = useState(true)
  const [animated, setAnimated] = useState(true)
  const userprohibido = useSelector(store => store.user[0].roll)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function showMeTheBot() {
    
    
    const bot = document.getElementById('bot')
    // eslint-disable-next-line 
    { showBot ? setShowBot(false) : setShowBot(true) }
    if (showBot) {
      // bot.setAttribute('data-aos','fade-right');
      bot.classList.add('showBot')
      setAnimated(false)
    }
    else {
      // bot.setAttribute('data-aos','');
      bot.classList.remove('showBot')
      setAnimated(true)
    }
  }

  const bot = document.querySelector('.chatbot');
  
  if(bot && animated){
    bot.classList.add('animate__fast')
    bot.classList.add('animate__animated')
    bot.classList.add('animate__headShake')
    bot.classList.add('animate__infinite')
    bot.classList.add('infinite')
    bot.style.setProperty('--animate-duration', '2s');
  }
  if(bot && !animated){
    bot.classList.remove('animate__fast')
    bot.classList.remove('animate__animated')
    bot.classList.remove('animate__headShake')
    bot.classList.remove('animate__infinite')
    bot.classList.remove('infinite')
  }

  return (
    <div>
      <Profile />
      <div className="cmp-hero">
        <Nav />
        <Routes>
          <Route path='/home' element={<PrincipalPage />} exact />
          <Route path='/products/:id' element={<CardDetails />} />
          <Route path='/products/edit/:id' element={(userprohibido === "admin") ? <EditCard /> : <PrincipalPage />} />
          <Route path='/products/create' element={(userprohibido === "admin") ? <CreateProduct /> : <PrincipalPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />}></Route>
          <Route path='/cart' element={<Cart />} exact />
          <Route path='/order' element={<Order />} exact />
          <Route path='/orden-compra-detalle/:id' element={<OrdenCompraDetail />} />
          <Route path='/account' element={<Account />} />
          <Route path='/metrics' element={(userprohibido === "admin") ? <Metrics /> : <PrincipalPage />}>
            <Route index element={<StockManagement />} />
            <Route path='stock-management' element={<StockManagement />} />
            <Route path='most-required-product' element={<MostRequiredProduct />} />
            <Route path='user-management' element={<UserManagement />} />
            <Route path='user-crud' element={<UserCrud />} />
            <Route path='top-customers' element={<TopCustomers />} />
            <Route path='admin-orders' element={<Orders />} />
            <Route path='order-detailed/:id' element={<OrderDetailed />} />
          </Route>
        </Routes>

        <div className="bot" id='bot' >

          <Bot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>

        <button className={`chatbot chat-button`} onClick={showMeTheBot}>
          <span className="material-symbols-outlined">
            smart_toy
          </span>
          Chat
        </button>

        <Footer />
      </div>
    </div>

  );
};
export default Home;
