const validationsPatients = (user) => {
    const errors = {};
    if(!user.name){
        errors.name = 'Required'
    }
    if(!user.age){
        errors.age = 'Required'
    }
    if(!user.gender){
        errors.gender = 'Required'
    }
    if(!user.symptoms){
        errors.symptoms = 'Required'
    }
    return errors;
}

export default validationsPatients;