export const getPatients = () => {
    const storedPatients = localStorage.getItem("patients")
    return storedPatients ? JSON.parse(storedPatients) : []
}

export const storedPatient = (patient) => {
    const storedPatients = getPatients()
    storedPatients.push(patient)
    localStorage.setItem("patients", JSON.stringify(storedPatients))
}