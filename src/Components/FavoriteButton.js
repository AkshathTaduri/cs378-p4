import React from 'react';

const FavoriteButton = ({addToFavs, ticker}) => {
    return (
        <div>
            <button onClick={addToFavs(ticker)}>
                <p>Add to Favorites</p>
            </button>
        </div>
    )
}

export default FavoriteButton;