export default function validatePasswordReset(values) {
    let errors = {}

    // Email Errors
    if (!values.email) {
        errors.email = "Your email is required."
    } else if (!/\S+@\S+\.\S+/i.test(values.email)) {
        errors.email = "Your email is invalid."
    }

    return errors;
}