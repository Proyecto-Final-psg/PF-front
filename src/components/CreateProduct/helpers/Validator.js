
export const validator = (input) => {
    let cond_numbers = /^[0-9]/
    let cond_name = /^[aA-zZ 0-9 _&-]*$/
    let cond_email = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    let cond_description = /^[a-zA-Z 0-9\u00C0-\u00FF &@&!&¡&?&¿&()&=&+&/&:&;&_&,&.&%&-]*$/;

    let error = {}
    
    if (input.name === '') error.name = 'Name is required'
    if (cond_name.test(input.name) === false) error.name = 'No symbols allowed'

    if(input.dni){
        if (cond_numbers.test(input.dni) === false) error.dni = 'Only numbers allowed'
    }
    if(input.phone){
        if (cond_numbers.test(input.phone) === false ) error.phone = 'Only numbers allowed'
    }
    

    if (input.address === '') error.address = 'Address is required'
    if (input.city === '') error.city = 'City is required'
    if (input.state === '') error.state = 'State is required'
    if (input.zipCode === '') error.zipCode = 'Zip Code is required'
    

    if (input.email === '') error.email = 'Email is required'
    if (input.email && cond_email.test(input.email) === false) error.email = 'Must be a valid Email'
    
    if (input.description === '') error.description = 'Description is required'
    if (cond_description.test(input.description) === false) error.description = 'No symbols allowed'
   
    if (input.review) {
        if (cond_description.test(input.review) === false) {
            error.review = 'Some special characters are not allowed'
        }
        else if(input.review === ''){
            error.review = 'Description is required'
        }
    }

    if (input.price === "0" || input.price === "") error.price = "Price can't be null"

    if (cond_name.test(input.type) === false) error.type = 'No symbols allowed'

    if (input.img === '') error.img = 'Image is required'

    if (input.price && parseInt(input.price.length) === 0) error.price = 'Price need to be more than $0'

    if (input.price > 9999) error.price = 'Price < $10000'

    if (input.categories && parseInt(input.categories.length) === 0) error.categories = 'At least one category is required'

    return error
}
