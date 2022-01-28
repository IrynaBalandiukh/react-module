import React from 'react';

import css from './Photo.module.css';

const Photo = ({photo}) => {
    const {albumId, id, url} = photo;
    return (
        <div className={css.item}>
            <div>Album: {albumId}</div>
            <div>id: {id}</div>
            <img src={url} alt={'photo'}/>
        </div>
    );
};

export default Photo;