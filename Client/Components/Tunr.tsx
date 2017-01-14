import * as React from "react";

import Login from "./Login";
import Player from "./Player";

import Song from "../Models/Song";
import Playlist from "../Models/Playlist";
import User from "../Models/User";

export interface TunrProps {
    username: string;
    password: string;
}

export interface TunrState {
    authenticatedUser?: User;
    currentlyPlayingSong?: Song;
    currentlyPlayingPlaylist?: Playlist;
    currentlyShowingPlaylist?: Playlist;
}

export class Tunr extends React.Component<TunrProps, TunrState> {
    constructor(props: TunrProps)
    {
        super(props);
        this.state = {
            authenticatedUser: null,
            currentlyPlayingSong: {
                title: "Hello Title",
                artist: "Hello Artist",
                album: "Hello Album"
            },
            currentlyShowingPlaylist: {
                title: "My Playlist",
                items: [
                    {
                        song: {
                            title: "Song 1",
                            artist: "Artist 1",
                            album: "Album 1"
                        },
                        order: 0
                    },
                    {
                        song: {
                            title: "Song 2",
                            artist: "Artist 2",
                            album: "Album 2"
                        },
                        order: 1
                    }
                ]
            }
        };
    }

    public tryLogin(username: string, password: string): boolean {
        if (username.length > 0 && password.length > 0) {
            this.setState({ authenticatedUser: { email: username } })
            return true;
        }
        return false;
    }

    public render() {
        if (this.state.authenticatedUser == null)
        {
            return (
                <Login loginAction={this.tryLogin.bind(this)} />
            );
        }
        return (
            <Player 
                currentlyPlayingSong={this.state.currentlyPlayingSong}
                currentlyShowingPlaylist={this.state.currentlyShowingPlaylist} />
        );
    }
}