import React from 'react'
import './Cards.css';

/**
 * Cards for displaying Playlist items 
 *  Accepts Artsist, Track, Image, Price, and URL as props 
 *  Links opens in a new tab to preview the Music Video and Track
 */

interface CardsProps {
    cardTextMain: string,
    cardTextSub: string,
    cardBtnMain: string,
    cardBtnSub: string,
    cardPrice: string,
    cardImageUrl: string
}

export const Cards: React.FC<CardsProps> = ({
    cardTextMain,
    cardTextSub,
    cardBtnMain,
    cardBtnSub,
    cardPrice,
    cardImageUrl
}) => {
        return (
            <div className="card mb-4 box-shadow">
                    <img className="card-img-top" data-src={cardImageUrl} alt="" src={cardImageUrl} />
                    <div className="card-body">
                        <p className="card-text"><span className="font-weight-bold">Artist: </span>{cardTextMain}</p>
                        <p className="card-text"><span className="font-weight-bold">Track: </span>{cardTextSub}</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <a target="_blank" rel="noopener noreferrer" href={cardBtnMain} className="btn btn-sm btn-outline-primary">Track</a>
                            <a target="_blank" rel="noopener noreferrer" href={cardBtnSub} className="btn btn-sm btn-outline-primary">Preview</a>
                        </div>
                        {(cardPrice) && <small className="font-weight-bold">£{cardPrice}</small>}
                    </div>
                </div>
            </div>
        );
}