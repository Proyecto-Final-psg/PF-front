

export const Validator = (input) => {

    let cond_name = /^[aA-zZ ]{2,40}$/;
    let cond_description = /^[a-zA-Z\s/^[^&()&.&,]+$/;

    let error = {}

    if (!input.name) {
        error.name = 'Name is required'
    } else if (input.name.length > 0 && cond_name.test(input.name) === false) {
        error.name = 'No symbols or numbers allowed'
    }
    if(!input.description) {
        error.description = 'Description is required'
    } if (input.description.length > 0 && cond_description.test(input.description) === false) {
        error.description = 'Only text and "()" allowed'
    }
    if( !input.type ) {
        error.type = 'Type is required'
    } else if (input.type.length > 0 && cond_name.test(input.type) === false) error.type = 'No symbols or numbers allowed'
    
    if (input.img.length === 0) error.img = 'Image is required'
    if (input.price.length === 0 ) error.price = 'Price is required'
    if (input.thc.length === 0 || input.cbd.length === 0 ) error.thc_cbd = 'thc and cbd is required'
    if (input.categories.length === 0 ) error.categories = 'One category is required'

    console.log(input)
    console.log(error)
    return error

}
