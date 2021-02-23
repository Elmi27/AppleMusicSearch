import React, { useState } from 'react';
import { Cards } from '../../components';
import { 
    PlayListType,
    Response
} from '../../Actions';
import { useInfiniteScroll } from "../../Hooks";
import { NO_RESULTS_ERROR_TEXT } from '../../Constants';

interface AlbumWrapperProps {
    content: PlayListType
}

export const AlbumWrapper: React.FC<AlbumWrapperProps> = ({
    content
}) => {
    /* Only 9 records are shown on page load */
    const playListArray: Response = content.results.slice(0, 9);
    const [cardItems, setCardItems] = useState(playListArray);
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreCardItems);

    /* Fetch more data on page scroll */
    function fetchMoreCardItems() {
        setCardItems((prevState: Response) => ([...prevState, ...content.results.slice(prevState.length, prevState.length + 9)]));
        setIsFetching(false);
    }
    
    return (
        <>
            {cardItems.map((item: any) => (
                <div key={ item.trackId } className="col-md-4">
                    <Cards                                                         
                        cardTextMain={ item.artistName }
                        cardTextSub={ item.trackName }
                        cardBtnMain={ item.trackViewUrl }
                        cardBtnSub={ item.previewUrl }
                        cardPrice={ item.collectionPrice }
                        // Changing the dimension of the images from 100px to 600px 
                        cardImageUrl={ (item.artworkUrl100).replace('100x100', '600x600') }
                    />
                </div>
            ))} 
            {/* Fetching Text */}
            {isFetching && <p className="text-center">{ NO_RESULTS_ERROR_TEXT }</p>}
        </>            
    );
}