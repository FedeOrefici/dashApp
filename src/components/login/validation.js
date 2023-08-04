const validationLogin = (user) => {
    const errors = {};

    if(!user.name){
        errors.name = 'Required'
    }
    if(!users.password){
        errors.password = 'Required'
    }
    
    return errors;
}