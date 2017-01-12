import * as React from "react";
import LibraryPane from "./LibraryPane";
import PlaylistPane from "./PlaylistPane";
import NowPlayingPane from "./NowPlayingPane";

export interface PlayerProps { }

export default class Player extends React.Component<PlayerProps, undefined> {
    constructor(props?: PlayerProps) {
        super(props);
    }
    public render() {
        return (
            <div>
                <LibraryPane />
                <PlaylistPane />
                <NowPlayingPane />
            </div>
        );
    }
}