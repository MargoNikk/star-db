import React from "react";

const AuthContext = React.createContext();

/**
 * Check if callback exist
 * 
 * @param {Function} callback 
 * @returns {Function}
 */
const initCallback = (callback) => {
    if (typeof callback === 'function') {
        return callback();
    }
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);

    const signin = (newUser, callback) => {
        setUser(newUser);
        initCallback(callback);
    }

    const signout = (callback) => {
        setUser(null);
        initCallback(callback);
    }

    const value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuthContext = () => {
    return React.useContext(AuthContext);
};

export {
    AuthProvider,
    useAuthContext
};