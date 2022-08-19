const validetion = (values) => {
    let errors = {};

    const emailValid = /^([A-Za-z0-9_\-.]{3,})+@([A-Za-z0-9_\-.]{2,})+\.([A-Za-z]{2,4})$/;

if(!values.email){
    errors.email = "Email is required"
} else if(!emailValid.test(values.email)){
        errors.email = "Email is invalid"
}

if(!values.password){
    errors.password = "Password is required"
} else if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g.test(values.password)){
    errors.password = "Password is invalid"
}


    return errors;
}

export default validetion;