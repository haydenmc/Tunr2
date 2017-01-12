import * as React from "react";

export interface NowPlayingPaneProps { }

export default class NowPlayingPane extends React.Component<NowPlayingPaneProps, undefined> {
    public render() {
        return <h1>Now Playing</h1>;
    }
}