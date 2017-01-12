import * as React from "react";

import Player from "./Player";
import Song from "../Models/Song";
import Playlist from "../Models/Playlist";

export interface TunrProps {
    username: string;
    password: string;
}

export interface TunrState {
    currentlyPlayingSong: Song;
    currentlyPlayingPlaylist?: Playlist;
    currentlyShowingPlaylist: Playlist;
}

export class Tunr extends React.Component<TunrProps, TunrState> {
    constructor(props: TunrProps)
    {
        super(props);
        this.state = {
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
    public render() {
        return (
            <Player 
                currentlyPlayingSong={this.state.currentlyPlayingSong}
                currentlyShowingPlaylist={this.state.currentlyShowingPlaylist} />
        );
    }
}