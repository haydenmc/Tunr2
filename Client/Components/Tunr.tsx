import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from 'redux';

import Login from "./Login";
import Player from "./Player";

import Song from "../Models/Song";
import Playlist from "../Models/Playlist";
import User from "../Models/User";
import ApplicationState from "../Models/ApplicationState";
import { login } from "../Data/Actions";

export interface TunrProps {
    loginProcessing: boolean;
    userName: string;
    dispatch: Dispatch<{}>;
}

class Tunr extends React.Component<TunrProps, undefined> {
    constructor(props: TunrProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Login 
                    isProcessing={this.props.loginProcessing}
                    loginAction={(username: string, password: string) => login(username, password)(this.props.dispatch)} />
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    loginProcessing: state.loginProcessing,
    userName: state.userName
} as TunrProps);

export default connect(mapStateToProps)(Tunr);