import * as Yup from "yup";

const Validation = Yup.object().shape({
    name: Yup.string()
        .required('name is required'),
    email: Yup.string()
        .required('email is required')
        .email("well that's not an email"),
    country: Yup.string()
        .required('country is required'),
    city: Yup.string('city is required')
        .required(),
    password: Yup.string()
        .required('')
        .min(2, "pretty sure this will be hacked")
});

export default Validation;
