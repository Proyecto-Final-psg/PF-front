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
import HistoryShops from "../Account/HistoryShops/HistoryShops";
import Favourites from "../Account/Favourites/Favourites";


const Home = () => {
  const [showBot, setShowBot] = useState(true)

  function showMeTheBot() {
    const bot = document.getElementById('bot')
     // eslint-disable-next-line 
    { showBot ? setShowBot(false) : setShowBot(true) }
    if (showBot) {
      // bot.setAttribute('data-aos','fade-right');
      bot.classList.add('showBot')
    }
    else {
      // bot.setAttribute('data-aos','');
      bot.classList.remove('showBot')
    }
  }
  return (
    <div className="cmp-hero">
      <Nav />
      <Routes>
        <Route path='/home' element={<PrincipalPage />} exact />
        <Route path='/products/:id' element={<CardDetails />} />
        <Route path='/products/edit/:id' element={<EditCard />} />
        <Route path='/products/create' element={<CreateProduct />} />
        <Route path='/users' element={<Users />}></Route>
        <Route path='/cart' element={<Cart />} exact />
        <Route path='/order' element={<Order />} exact />
        <Route path='/account' element={<Account />} >
          <Route index element={<HistoryShops />} />
          <Route path='history-shops' element={<HistoryShops />} />
          <Route path='favourites' element={<Favourites />} />
        </Route>
        <Route path='/metrics' element={<Metrics />}>
          <Route index element={<StockManagement />} />
          <Route path='stock-management' element={<StockManagement />} />
          <Route path='most-required-product' element={<MostRequiredProduct />} />
          <Route path='user-management' element={<UserManagement />} />
          <Route path='user-crud' element={<UserCrud />} />
          <Route path='top-customers' element={<TopCustomers />} />
          <Route path='admin-orders' element={<Orders />}>
            <Route path='order-detailed/:id' element={<OrderDetailed />} />
          </Route>
        </Route>
      </Routes>

      <div className="bot" id='bot' >

        <Bot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>

      <button className='chatbot chat-button' onClick={showMeTheBot}>
        <span className="material-symbols-outlined">
          smart_toy
        </span>
        Chat
      </button>

      <Footer />
    </div>
  );
};
export default Home;
