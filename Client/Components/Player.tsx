import * as React from "react";
import LibraryPane from "./LibraryPane";
import PlaylistPane from "./PlaylistPane";
import NowPlayingPane from "./NowPlayingPane";

import Song from "../Models/Song";
import Playlist from "../Models/Playlist";

export interface PlayerProps {
    currentlyPlayingSong: Song;
    currentlyShowingPlaylist: Playlist;
}

export default class Player extends React.Component<PlayerProps, undefined> {
    public render() {
        return (
            <div className="player">
                <div className="library">
                    <h1>Library</h1>
                    <LibraryPane />
                </div>
                <div className="playlist">
                    <PlaylistPane 
                        currentlyPlayingSong={this.props.currentlyPlayingSong}
                        currentlyShowingPlaylist={this.props.currentlyShowingPlaylist} />
                </div>
                <div className="nowPlaying">
                    <NowPlayingPane
                        currentlyPlayingSong={this.props.currentlyPlayingSong} />
                </div>
            </div>
        );
    }
}