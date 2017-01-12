import * as React from "react";

export default class PlayControls extends React.Component<undefined, undefined> {
    public render() {
        return (
            <div className="playControls">
                <button className="skipBack">Prev</button>
                <button className="playPause">PlayPause</button>
                <button className="skipForward">Next</button>
            </div>
        );
    }
}