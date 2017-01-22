import * as React from "react";
import { connect, Dispatch } from "react-redux";
import ApplicationState from "../Data/ApplicationState";
import { login } from "../Data/Login/Actions";

interface LoginProps {
    processing: boolean;
    dispatch: Dispatch<{}>;
}

interface LoginState {
    email?: string;
    password?: string;
}

class Login extends React.Component<LoginProps, LoginState> {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
    }
    public submitForm(e: Event) {
        e.preventDefault();
        login(this.state.email, this.state.password)(this.props.dispatch);
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

    public submitEmail(e: Event) {
        e.preventDefault();
        // Check if account exists
    }

    public render() {
        return (
            <div className="login">
                <div className="inner">
                    <form onSubmit={this.submitForm.bind(this)}>
                        <div className="logo noSelect noHighlightCursor">Tunr</div>
                        <input type="email" placeholder="enter your email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
                    </form>
                    {this.props.processing && <div className="loader"></div>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    processing: state.login.isProcessing
} as LoginProps);

export default connect(mapStateToProps)(Login);