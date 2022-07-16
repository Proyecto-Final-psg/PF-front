import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { BotAvatar } from "../BotAvatar/BotAvatar";
import { Discounts } from "../Discounts";

// let helpCommands = ""
const config = {
    initialMessages: [createChatBotMessage(`Welcome to Weedical!`),createChatBotMessage("Some options that you can ask me => Help - Discounts - About - Contact - Diseases")],
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