export const PLAYLIST_LOADING = "PLAYLIST_LOADING";
export const PLAYLIST_FAILURE = "PLAYLIST_FAILURE";
export const PLAYLIST_SUCCESS = "PLAYLIST_SUCCESS";

export type Response = {
    trackId: string,
    artistName: string,
    trackName: string,
    trackViewUrl: string,
    previewUrl: string,
    collectionPrice: string,
    artworkUrl100 :string,
}[]

export type PlayListType = {
    results : Response
}

export interface PlayListLoading {
    type: typeof PLAYLIST_LOADING
}

export interface PlayListFailure {
    type: typeof PLAYLIST_FAILURE
}

export interface PlayListSuccess {
    type: typeof PLAYLIST_SUCCESS
    payload: PlayListType,
}

export type PlayListDispatchType = PlayListLoading | PlayListFailure | PlayListSuccess;