class MessageParser{
    constructor(actionProvider, state){
        this.actionProvider = actionProvider
        this.state = state
    }

    
    parse(message){
        const saludos = ['saludame','hola','holi', 'holu','buen día','buenas tardes', 'buenas noches','hi','hello']
        console.log(message)
        let lowercase = message.toLowerCase();
        
        for (let i = 0; i < saludos.length; i++) {
            if(lowercase.includes(saludos[i]))
                this.actionProvider.helloWorldHandler()
        }

        if(lowercase.includes('discounts'))
            this.actionProvider.discountsHandler()

        if(lowercase.includes('help'))
            this.actionProvider.helpHandler()
    }
}

export default MessageParser;