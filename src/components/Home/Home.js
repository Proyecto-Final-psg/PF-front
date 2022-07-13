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

const Home = () => {
  const [showBot, setShowBot] = useState(true)

    function showMeTheBot(){
        const bot = document.getElementById('bot')
        {showBot ? setShowBot(false) : setShowBot(true)}
        if(showBot){
          // bot.setAttribute('data-aos','fade-right');
          bot.classList.add('showBot')
        }
        else{
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
        <Route path='/account' element={<Account />} exact />
        <Route path='/cart' element={<Cart />} exact />
        <Route path='/metrics' element={<Metrics />} />
      </Routes>

      <div className="bot" id='bot' >

                <Bot 
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            </div>
            <button className='chatbot' onClick={showMeTheBot}>
            <span class="material-symbols-outlined">
smart_toy
</span>
              Chat
              </button>
      
      <Footer />
    </div>
  );
};
export default Home;
