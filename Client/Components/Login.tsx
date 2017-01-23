import * as React from "react";
import { connect, Dispatch } from "react-redux";
import ApplicationState from "../Data/ApplicationState";
import { login, checkEmail, register } from "../Data/Login/Actions";

interface LoginProps {
    processing: boolean;
    dispatch: Dispatch<{}>;
    emailFound: boolean;
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
        if (this.props.emailFound) {
            login(this.state.email, this.state.password)(this.props.dispatch);
        } else {
            if (this.props.emailFound === undefined) {
                checkEmail(this.state.email)(this.props.dispatch);
            } else {
                register(this.state.email, this.state.password)(this.props.dispatch);
            }
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
                        <div className="logo noSelect noHighlightCursor">Tunr</div>
                        <input type="email" placeholder="enter your email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} autoFocus />
                        {this.props.emailFound === true && <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} autoFocus />}
                        {this.props.emailFound === false && <input type="password" placeholder="create a password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} autoFocus />}
                        <input type="submit" style={{display: "none"}} />
                    </form>
                    {this.props.processing && <div className="loader"></div>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    processing: state.login.isProcessing,
    emailFound: state.login.isEmailFound
} as LoginProps);

export default connect(mapStateToProps)(Login);