const validationLogin = (user) => {
    const errors = {};

    if(!user.name){
        errors.name = 'Required'
    }
    if(!user.password){
        errors.password = 'Required'
    }
    
    return errors;
}

export default validationLogin;