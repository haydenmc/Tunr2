import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from 'redux';

import Login from "./Login";
import Player from "./Player";

import Song from "../Models/Song";
import Playlist from "../Models/Playlist";
import User from "../Models/User";
import TokenResponse from "../Models/Api/TokenResponse";
import ApplicationState from "../Data/ApplicationState";
import { login } from "../Data/Login/Actions";

export interface TunrProps {
    authToken: TokenResponse;
    email: string;
    dispatch: Dispatch<{}>;
}

class Tunr extends React.Component<TunrProps, undefined> {
    constructor(props: TunrProps) {
        super(props);
    }

    public render() {
        if (this.props.authToken)
        {
            return (
                <div>
                    <Player />
                </div>
            );
        } else {
            return (
                <div>
                    <Login />
                </div>
            );
        }
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    authToken: state.login.token
} as TunrProps);

export default connect(mapStateToProps)(Tunr);