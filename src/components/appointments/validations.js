const validationAppointments = (appointment) => {
    const erorrs = {};
    if(!appointment.name){
        erorrs.name = 'Required'
    }
    if(!appointment.date){
        erorrs.date = 'Required'
    }
    return erorrs;
}

export default validationAppointments;