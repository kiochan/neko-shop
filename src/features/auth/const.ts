export const SESSION_COOKIE_NAME = 'sessionId'

export const SESSION_DURATION_DAYS = 7

export const UiText = {
  register: {
    title: 'Register',

    username: {
      label: 'Username',
      placeholder: 'Username',
      description: 'Avatar uses the first character of your username',
      errorRequired: 'Username must not be empty',
    },

    email: {
      label: 'Email',
      placeholder: 'Email',
      description: 'Please enter a valid email address',
      errorFormat: 'E-mail format is invalid',
    },

    dob: {
      label: 'Date of birth',
      description: 'Optional',
    },

    password: {
      label: 'Password',
      placeholder: 'Password',
      description: 'Must be at least 8 characters long',
    },

    confirmPassword: {
      label: 'Confirm Password',
      placeholder: 'Confirm Password',
      errorMismatch: 'Passwords do not match',
    },

    agree: {
      label: 'I agree to the terms and conditions',
      error: 'You must agree to the terms',
    },

    submit: {
      normal: 'Register',
      pending: 'Registering...',
    },

    error: {
      emailRegistered: 'Email already registered',
      serverUnavailable: 'The server is currently unavailable. Please try again later.',
    },
  },
}
