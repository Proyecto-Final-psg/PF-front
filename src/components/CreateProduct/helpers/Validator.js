

export const Validator = (input) => {
    
    let cond_name =  /^[aA-zZ 0-9 _]*$/
    //let cond_name = /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]*$/
    // let cond_description = /^[a-zA-Z 0-9\s/^[^&()&.&,]+$/;
    //let cond_description = /^[aA-zZ\u00C0-\u024F\u1E00-\u1EFF 0-9 _]*$/

    let error = {}

    if (!input.name) {
        error.name = 'Name is required'
    } 
    
    if(!input.description){
        error.description = 'Description is required'
    }
    if ( cond_name.test(input.type) === false) error.type = 'No symbols allowed'
    
    if (parseInt(input.img.length) === 0) error.img = 'Image is required'

    if (parseInt(input.price.length) === 0 ) error.price = 'Price need to be more than $0'

    if (parseInt(input.categories.length) === 0 ) error.categories = 'At least one category is required'


    return error

}
