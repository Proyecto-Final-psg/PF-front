
class ActionProvider {
    constructor(createChatBotMessage,setStateFunc){
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc
    } 

    helloWorldHandler = () =>{
        const message = this.createChatBotMessage("Greetings👋! Is there anything I can help you with?")
        this.setChatbotMessage(message)
    }

    byeHandler = () => {
        const message = this.createChatBotMessage("I see you're leaving. Enjoy your day!")
        this.setChatbotMessage(message)
    }

    insultHandler = () => {
        const insults = ["How are you feeling? Are you upset or angry? Get a product from us and chill", "Relax, we're calmed down here😥", "I'm only a robot, you get it ... right?😐"]
        const message = this.createChatBotMessage(insults[Math.floor(Math.random()*insults.length)])
        this.setChatbotMessage(message)
    }

    setChatbotMessage= (message) => {
        this.setState(state => ({...state, messages:[...state.messages, message]}))
    }

    discountsHandler = () =>{
        this.message = this.createChatBotMessage('Discounts of the month 🔥',{
            widget : "products"
        })
        this.setChatbotMessage(this.message)
    }

    thanksHandler = () => {
        this.message = this.createChatBotMessage('No problem 🤙! If there is anything else I can help you with, let me know 😉')
        this.setChatbotMessage(this.message)
    }

    helpHandler = () => {
        this.message = this.createChatBotMessage('We sell cbd/thc oils for medicinal porpuses. Check our products in the Home section! Each product has a description.')
        this.setChatbotMessage(this.message)
        this.message2 = this.createChatBotMessage("Some options that you can ask me => Help - Discounts - About - Contact - Diseases")
        this.setChatbotMessage(this.message2)
    }

    aboutHandler = () => {
        this.message = this.createChatBotMessage('We sell excelent quality oils, based of CBD / THC. This are medicinal products, to afford diseases like Parkinson, Epilepsy and more')
        this.setChatbotMessage(this.message)
    }

    contactHandler = () => {
        this.message = this.createChatBotMessage('If you want to contact some of the owners or sellers, please send an email to weedical.shop@gmail.com')
        this.setChatbotMessage(this.message)
    }

    diseaseHandler = () => {
        this.message = this.createChatBotMessage('We have a few products for differents diseases. Please specify the disease, like "Epilepsy", if we have something for that we will inform you here. Or just write "options" to see all the diseases we cover with our products.')
        this.setChatbotMessage(this.message)
    }

    diseasesList = () => {
        this.message = this.createChatBotMessage('We have products for Parkinson, Epilepsy , Huntington and Alzheimer, if you are interested, write down the disease to see the recomended products.')
        this.setChatbotMessage(this.message)
    }

    epilepsy = () => {
        this.message = this.createChatBotMessage(`For Epilepsy, we can offer you Santa Calma or Bove, please search it in the store. Remember always check it with a doctor first.`)
        this.setChatbotMessage(this.message)
    }

    parkinson = () => {
        this.message = this.createChatBotMessage(`For Parkinson, we can offer you Tantrum, please search it in the store. Remember always check it with a doctor first.`)
        this.setChatbotMessage(this.message)
    }

    alzheimer = () => {
        this.message = this.createChatBotMessage(`For Alzheimer, we can offer you LyF Black or White, please search it in the store. Remember always check it with a doctor first.`)
        this.setChatbotMessage(this.message)
    }

    huntington = () => {
        this.message = this.createChatBotMessage(`For Huntington, we can offer you Sereniti, please search it in the store. Remember always check it with a doctor first.`)
        this.setChatbotMessage(this.message)
    }

    paymentHandler = () => {
        this.message = this.createChatBotMessage(`We accept Visa and MasterCard as payment options 💳!`)
        this.setChatbotMessage(this.message)
    }
 }
 
 export default ActionProvider;