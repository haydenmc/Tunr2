import User from "../Models/User";
import Song from "../Models/Song";
import Playlist from "../Models/Playlist";
import TokenResponse from "../Models/Api/TokenResponse";

export interface ApplicationState {
    login?: ApplicationLoginState;
    player?: ApplicationPlayerState;
}

export interface ApplicationLoginState {
    email?: string;
    isEmailFound?: boolean;
    token?: TokenResponse;
    error?: string;
    isProcessing?: boolean;
}

export interface ApplicationPlayerState {
    currentlyPlayingSong?: Song;
    currentlyShowingPlaylist?: Playlist;
}

export default ApplicationState;