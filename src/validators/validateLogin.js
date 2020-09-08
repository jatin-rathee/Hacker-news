export default function validateLogin(values) {
    let errors = {}

    // Email Errors
    if (!values.email) {
        errors.email = "Your email is required."
    } else if (!/\S+@\S+\.\S+/i.test(values.email)) {
        errors.email = "Your email is invalid."
    }

    // Password Errors
    if (!values.password) {
        errors.password = "A password is required."
    } else if (values.password.length < 6) {
        errors.password = "Your password must be at least 6 characters."
    }

    return errors;
}