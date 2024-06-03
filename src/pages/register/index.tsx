import React from "react";
import { Header } from "../../components/header";

export function Register() {
    return (
        <React.Fragment>
            <Header isAuthenticated={false} />
            
            <h1>Register</h1>
        </React.Fragment>
    );
}