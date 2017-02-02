import { handleActions, handleAction, Action } from "redux-actions";
import { ApplicationPlayerState } from "../ApplicationState";

const initialState: ApplicationPlayerState = {
    currentlyPlayingSong: null,
    currentlyShowingPlaylist: null
};

export default handleActions<ApplicationPlayerState>({
    
}, initialState);