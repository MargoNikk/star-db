import React from "react";
import { useAuthContext } from "../context/user-authorization";
import { AuthButton } from ".";

const AuthContent = () => {
    const auth = useAuthContext();

    if (!auth.user) {
        return (
            <div>
                <h3>You can't see this page. This is only for true Jedi!</h3>
                <p>You must Log in.</p>
                <AuthButton />
            </div>
        );
    }

    return (
        <div>
            <h1>Welcome, Jedi {auth.user}!</h1>
            <h3>This is The Jedi Temple!</h3>
            <br />
            <p>If you are tired you can go.</p>
            <AuthButton />
        </div>
    );
};

export default AuthContent;