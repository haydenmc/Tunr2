import * as React from "react";
import PlayControls from "./PlayControls";
import Song from "../Models/Song";

export interface NowPlayingPaneProps {
    currentlyPlayingSong: Song;
}

export default class NowPlayingPane extends React.Component<NowPlayingPaneProps, undefined> {
    public render() {
        return (
            <div className="nowPlayingPane">
                <div className="title">{this.props.currentlyPlayingSong.title}</div>
                <div className="artist">{this.props.currentlyPlayingSong.artist}</div>
                <PlayControls />
            </div>
        );
    }
}