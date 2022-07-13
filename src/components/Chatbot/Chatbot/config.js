import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { BotAvatar } from "../BotAvatar/BotAvatar";
import { Discounts } from "../Discounts";

let helpCommands = ""


const config = {
    initialMessages: [createChatBotMessage(`Welcome to Weedical, this are some messages that you can write down below:`),createChatBotMessage("Help - Discounts")],
    botName: "Weedbot",
    customComponents: {
        botAvatar:(props) => <BotAvatar {...props} />
    },
    customStyles:{
        botMessageBox:{
            backgroundColor:"green"
        },
    chatButton:{
        backgroundColor:"green"
    }
    },
    state:{
        products: []
    },
    widgets: [
        {
            widgetName: "products",
            widgetFunc: (props) => <Discounts {...props} />,
            mapStateToProps: ["products"]
        }
    ]
  }
  
  export default config