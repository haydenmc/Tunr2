import User from "./User";
import Song from "./Song";
import Playlist from "./Playlist";
import TokenResponse from "./Api/TokenResponse";

export interface ApplicationState {
    /* Authentication State */
    userName?: string;
    authToken?: TokenResponse;
    loginError?: string;
    loginProcessing?: boolean;
    
    /* Play state */
    currentlyPlayingSong?: Song;
    currentlyPlayingPlaylist?: Playlist;
    currentlyShowingPlaylist?: Playlist;
}
export default ApplicationState;