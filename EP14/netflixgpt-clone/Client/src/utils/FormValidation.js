export const formValidator = (email,password,name,isSignInForm) => {
    const isEmail = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    // Validate name only if it's the sign-up form
    if (!isSignInForm && (!name || !/^([a-zA-Z ]){2,15}$/.test(name))) {
        return {
            error: true,
            message: "Enter a valid name",
        };
    }

    if (!isEmail) {
        return {
            error: true,
            message: "Enter a valid email",
        };
    }

    if (!isPassword) {
        return {
            error: true,
            message: "Enter a valid password",
        };
    }

    return {
        error: false,
    };
};
