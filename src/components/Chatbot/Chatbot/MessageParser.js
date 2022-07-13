class MessageParser{
    constructor(actionProvider, state){
        this.actionProvider = actionProvider
        this.state = state
    }

    
    parse(message){
        const saludos = ['saludame','hola','holi', 'holu','buen día','buenas tardes', 'buenas noches','hello']
        const bye = ['bye','see ya', 'see you']
        const thanks = ['thank','great','gracias']
        const insults = ['fuck','shit','omg','damn','idiot','dumb','stupid']
        const diseasesList = ['parkinson','epilepsy','huntington','alzheimer']
        const payment = ['cash', 'credit card', 'payment']
        // const diseas = [
        //     {
        //         name:"epilepsy",
        //         func: this.actionProvider.epilepsy()
        //     },
        //     {
        //         name:"parkinson",
        //         func: this.actionProvider.parkinson()
        //     }
        // ]

        // console.log(message)
        let lowercase = message.toLowerCase();
        

        for (let i = 0; i < saludos.length; i++) {
            if(lowercase.includes(saludos[i]))
                this.actionProvider.helloWorldHandler()
        }

        for (let i = 0; i < thanks.length; i++) {
            if(lowercase.includes(thanks[i]))
                this.actionProvider.thanksHandler()
        }

        for (let i = 0; i < bye.length; i++) {
            if(lowercase.includes(bye[i]))
                this.actionProvider.byeHandler()
        }

        for (let i = 0; i < insults.length; i++) {
            if(lowercase.includes(insults[i]))
                this.actionProvider.insultHandler()
        }
        
        for (let i = 0; i < payment.length; i++) {
            if(lowercase.includes(payment[i]))
                this.actionProvider.paymentHandler()
        }

        if(lowercase.includes('disc'))
            this.actionProvider.discountsHandler()

        if(lowercase.includes('help'))
            this.actionProvider.helpHandler()

        if(lowercase.includes('about'))
            this.actionProvider.aboutHandler()

        if(lowercase.includes('contact'))
            this.actionProvider.contactHandler()

        if(lowercase.includes('disease'))
            this.actionProvider.diseaseHandler()
        
        if(lowercase.includes('options'))
            this.actionProvider.diseasesList()
        
            for (let i = 0; i < diseasesList.length; i++) {
                if(lowercase.includes(diseasesList[i])){
                    console.log(diseasesList[i])
                    switch (diseasesList[i]) {
                        case "epilepsy":
                            this.actionProvider.epilepsy()
                            break;
                        case "parkinson":
                            this.actionProvider.parkinson()
                            break
                        case "huntington":
                            this.actionProvider.huntington()
                            break
                        case "alzheimer":
                            this.actionProvider.alzheimer()
                            break
                        
                        default:
                            break;
                    }
                }
            }
        
    }
}

export default MessageParser;