const validChat = (message) => {
    const errors = {};
    if(!message.message){
        errors.message = 'Required'
    }
    return errors;
}

export default validChat;