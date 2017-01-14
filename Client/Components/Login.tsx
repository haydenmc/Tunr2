import * as React from "react";

interface LoginProps {
    loginAction: (user: string, pass: string) => boolean;
}

interface LoginState {
    email?: string;
    password?: string;
}

export default class Login extends React.Component<LoginProps, LoginState> {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
    }
    public submitForm(e: Event) {
        e.preventDefault();
        var result = this.props.loginAction(this.state.email, this.state.password);
        if (!result) {
            alert("Error");
        }
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
            <div className="login">
                <div className="inner">
                    <form onSubmit={this.submitForm.bind(this)}>
                        <div className="logo">Tunr</div>
                        <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
                        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
                        <input type="submit" value="Log In" />
                    </form>
                </div>
            </div>
        );
    }
}