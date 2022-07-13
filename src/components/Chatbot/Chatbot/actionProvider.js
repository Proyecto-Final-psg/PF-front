class ActionProvider {
    constructor(createChatBotMessage,setStateFunc){
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc
    } 

    helloWorldHandler = () =>{
        const message = this.createChatBotMessage("Hi! Tell me what can I do for you?.")
        this.setChatbotMessage(message)
    }

    setChatbotMessage= (message) => {
        this.setState(state => ({...state, messages:[...state.messages, message]}))
    }

    discountsHandler = () =>{
        this.message = this.createChatBotMessage('The discounts of the month =>',{
            widget : "products"
        })
        this.setChatbotMessage(this.message)
    }

    helpHandler = () => {
        this.message = this.createChatBotMessage('We sell cbd/thc oils for medicinal porpuses. Check our products in the Home section! Each product has a description.')
        this.setChatbotMessage(this.message)
    }
 }
 
 export default ActionProvider;