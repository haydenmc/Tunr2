import * as React from "react";

interface RegisterProps {
    registerSuccessAction: () => void;
}

interface RegisterState {
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export default class Register extends React.Component<undefined, RegisterState> {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            confirmPassword: ""
        };
    }
    public submitForm(e: Event) {
        e.preventDefault();
    }

    public handleEmailChange(e: Event) {
        this.setState({
            email: (e.target as HTMLInputElement).value
        });
    }

    public handlePasswordChange(e: Event) {
        this.setState({
            password: (e.target as HTMLInputElement).value
        });
    }

    public render() {
        return (
            <div className="register">
                <div className="inner">
                    <form onSubmit={this.submitForm.bind(this)}>
                        <div className="logo">Register</div>
                        <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
                        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
                        <input type="password" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handlePasswordChange.bind(this)} />
                        <input type="submit" value="Log In" />
                    </form>
                </div>
            </div>
        );
    }
}