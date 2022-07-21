
export const validate = (input) => {
    
    let cond_name =  /^[aA-zZ 0-9 _]*$/
    let cond_review = /^[a-zA-Z 0-9\u00C0-\u00FF &@&!&¡&?&¿&()&=&+&/&:&;&_&,&.&%&-]*$/;

    let error = {}

    if (!input.name) {
        error.name = 'Name is required'
    } else if (cond_name.test(input.name) === false) {
        error.name = 'No symbols are allowed'
    }
    
    if(!input.review){
        error.review = 'Description is required'
    }else if (cond_review.test(input.review) === false) {
        error.review = 'Some special characters are not allowed'
    }



    return error

}