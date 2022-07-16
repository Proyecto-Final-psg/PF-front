

export const Validator = (error, setError, e) => {
    let cond_name = /^[aA-zZ ]{2,40}$/;
    let cond_description = /^[a-zA-Z\s/^[^&()&.&,]+$/;
    if (e.target.name === 'name' && cond_name.test(e.target.value) === true) {
        setError({
            ...error,
            stateName: false
        })
    }
    else if (e.target.name === 'name' && cond_name.test(e.target.value) === false) {
        setError({
            ...error,
            stateName: true,
            messageName: 'No symbols or numbers allowed'
        })
    }
    else if (e.target.name === 'description' && cond_description.test(e.target.value) === true) {
        setError({
            ...error,
            stateMessage: false
        })
    }
    else if (e.target.name === 'description' && cond_description.test(e.target.value) === false) {
        setError({
            ...error,
            stateMessage: true,
            messageDescription: 'Only text and "()" allowed'
        })
    }
    else if (e.target.name === 'type' && cond_name.test(e.target.value) === true) {
        setError({
            ...error,
            stateType: false
        })
    }
    else if (e.target.name === 'type' && cond_name.test(e.target.value) === false) {
        setError({
            ...error,
            stateType: true,
            messageType: 'No symbols or numbers allowed'
        })
    }
    
}
