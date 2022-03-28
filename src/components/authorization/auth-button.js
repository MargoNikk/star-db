import React from 'react';
import { Link } from "react-router-dom";
import { useAuthContext } from '../context/user-authorization';
import { useNavigate } from 'react-router-dom';

import './auth-button.css';

const AuthButton = () => {
    const auth = useAuthContext();
    const navigate = useNavigate();
    const onClick = () => auth.signout(() => { navigate('/') });
    let label = 'Log out';

    if (!auth.user) {
        label = <Link to="/login">Log in</Link>
    }

    return (
        <button className="btn btn-primary btn-sm auth" onClick={auth.user && onClick}>
            {label}
        </button>
    );
};

export default AuthButton;