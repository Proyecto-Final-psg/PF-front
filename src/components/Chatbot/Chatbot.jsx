import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/actionProvider";
import './Chatbot.scss'

export function Bot(){
    return <div className='' >
       <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
}