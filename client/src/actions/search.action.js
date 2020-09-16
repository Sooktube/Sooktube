import { searchConstants } from "../constants";
import { playlistService } from "../services";

export const searchActions = {
    initRecommendedVideos,
    loadRecommendedVideos
};

function initRecommendedVideos({ listID, username, orderBy, limit, offset }) {
    return dispatch => {
        dispatch(request());
        playlistService.getGTEQ0LT5VideoList({ listID, username, orderBy, limit, offset: 0 })
            .then(response => {
                dispatch(success(response));
            },
            error =>{
                dispatch(failure(error));
            })
    }

    function request() { return { type: searchConstants.LOAD_REC_VIDEOS_INIT }}
    function success(data) { return { type: searchConstants.LOAD_REC_VIDEOS_SUCCESS, data }}
    function failure(error) { return { type: searchConstants.LOAD_REC_VIDEOS_FAILURE, error }}
}

function loadRecommendedVideos({ listID, username, orderBy, limit, offset }) {
    return dispatch => {
        dispatch(request());
        playlistService.getGTEQ0LT5VideoList({ listID, username, orderBy, limit, offset })
            .then(response => {
                    dispatch(success(response));
                },
                error =>{
                    dispatch(failure(error));
                })
    }

    function request() { return { type: searchConstants.LOAD_REC_VIDEOS_REQUEST }}
    function success(data) { return { type: searchConstants.LOAD_REC_VIDEOS_SUCCESS, data }}
    function failure(error) { return { type: searchConstants.LOAD_REC_VIDEOS_FAILURE, error }}
}