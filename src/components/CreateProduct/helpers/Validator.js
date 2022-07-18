

export const Validator = (input) => {
    let cond_name =  /^[aA-zZ 0-9 _]*$/
    let cond_description = /^[a-zA-Z 0-9\s/^[^&()&.&,]+$/;

    let error = {}

    if (!input.name) {
        error.name = 'Name is required'
    } else if (cond_name.test(input.name) === false) {
        error.name = 'No symbols are allowed'
    }
    
    if(!input.description){
        error.description = 'Description is required'
    }else if (cond_description.test(input.description) === false) {
        error.description = 'Only text, numbers and "()" are allowed'
    }

    if ( cond_name.test(input.type) === false) error.type = 'No symbols or numbers allowed'
    
    if (input.img.length === 0) error.img = 'Image is required'

    if (input.price.length === 0 ) error.price = 'Price need to be more than $0'

    if (input.categories.length === 0 ) error.categories = 'At least one category is required'


    return error

}
