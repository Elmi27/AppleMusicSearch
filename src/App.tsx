import React from 'react';
import { useSelector } from 'react-redux';
import { 
    Header,
    HeroBanner
} from './components';
import { AlbumWrapper } from './Wrapper';
import { RootStoreType } from './Store';
import AppleLogo from'./images/apple-logo.svg';
import { LOGO_TEXT } from './Constants';

export const App: React.FC = () => {

    const getPlayListState = useSelector((state: RootStoreType) => state.playList.playList);

    return (
        <>
            <Header logoImage={ AppleLogo } logoText={ LOGO_TEXT } />
            <HeroBanner />
            {
                // Display content based on search results 
                (getPlayListState) && 
                <div className="album py-5">
                    <div className="container">
                        <div className="row">
                            <AlbumWrapper content={ getPlayListState } /> 
                        </div>
                    </div>
                </div>
            }             
        </>
    );
}

export default App;
