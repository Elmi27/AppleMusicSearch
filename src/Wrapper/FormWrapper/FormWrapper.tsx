import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {    
    LABEL_TEXT,
    INPUT_ERROR_TEXT,
    INPUT_PLACEHOLDER_TEXT,
    NO_RESULTS_ERROR_TEXT
} from '../../Constants';
import {
    ErrorMessage, 
    SearchForm 
} from '../../components'
import { RootStoreType } from '../../Store';
import { GetPlayList } from '../../Actions';

export const FormWrapper: React.FC = () => {
    /* Selectors */
    const getPlayListState = useSelector((state: RootStoreType) => state.playList.playList);
    const getLoadingState = useSelector((state: RootStoreType) => state.playList.isLoading);

    let contentElement = null; 

    /* Dispatch with the Searched string */
    const dispatch = useDispatch();
    const dispatchRedux = (searchedTerm: string) => {
        dispatch(GetPlayList(searchedTerm));
    }

    /* Checking if the Playlist is not empty */
    if(getPlayListState) {
        /* Show Error Message if no results found */
        contentElement = (getPlayListState.results.length > 0) ? null : <ErrorMessage>{NO_RESULTS_ERROR_TEXT}</ErrorMessage>
    }

    return (
        <>
            { contentElement }
            <SearchForm 
                isLoading={ getLoadingState }
                labelText={ LABEL_TEXT }
                placeHolderText={ INPUT_PLACEHOLDER_TEXT }
                errorText={ INPUT_ERROR_TEXT }
                searchDispatch={ dispatchRedux }
            />
        </>
    );
}