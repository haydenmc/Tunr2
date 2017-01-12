import * as React from "react";

import Player from "./Player";

export interface TunrProps { }

export class Tunr extends React.Component<TunrProps, undefined> {
    public render() {
        return <Player />;
    }
}