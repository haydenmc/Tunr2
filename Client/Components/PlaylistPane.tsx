import * as React from "react";

import Song from "../Models/Song";
import Playlist from "../Models/Playlist";

export interface PlaylistPaneProps {
    currentlyPlayingSong: Song;
    currentlyShowingPlaylist: Playlist;
}

export default class PlaylistPane extends React.Component<PlaylistPaneProps, undefined> {
    public render() {
        return (
            <div className="playlistPane">
                <h1>{this.props.currentlyShowingPlaylist.title}</h1>
                <ul>
                    {this.props.currentlyShowingPlaylist.items.map(function(item) {
                        return (
                            <li>
                                <div className="playlistSongTitle">{item.song.title}</div>
                                <div className="playlistSongArtist">{item.song.artist}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}