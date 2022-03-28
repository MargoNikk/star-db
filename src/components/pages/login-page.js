import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/user-authorization';

const LoginPage = () => {
    const navigate = useNavigate();
    const auth = useAuthContext();

    const handleSubmit = (event) => {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username");

        auth.signin(username, () => { navigate('/jeditemple', { replace: true }) });
    }

    return (
        <div className="jumbotron">
            <p>Login to see The Jedi Temple!</p>

            <form action="" onSubmit={handleSubmit}>
                <label>
                    Username: <input type="text" name="username" />
                </label>
                <button
                    style={{ margin: " 0 15px", verticalAlign: "baseline" }}
                    type="submit"
                    className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;