export const FORM_ERROR = {
    IS_REQUIRED: 'This field is required',
    MAX_LENGTH: 'You exceeded the max length',
    MIN_LENGTH: 'Password must have at least 6 characters',
    PASSWORD_NOT_MATCH: "Password doesn't match",
    PASSWORD_VALIDATE:
        'Password must at have least 10 characters, at least one capital letter, at least one number AND at least one special character',
    NUMBER_VALIDATE: 'Number only',
    PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;\"\'<>,.?/])(?=.*\d)[A-Za-z\d~!@#$%^&*_\-+=`|\\(){}[\]:;\"\'<>,.?/]{10,64}$/,
    EMAIL_REGEX: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    NUMBER_REGEX: /^[0-9]*$/,
}