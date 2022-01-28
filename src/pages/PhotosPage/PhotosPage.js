import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {photosService} from '../../services/photos.service';
import Photo from '../../components/PhotoComponent/Photo';

const PhotosPage = () => {
    const {albumId} = useParams();
    const [photos, setPhotos] = useState([]);
    console.log(albumId)
    useEffect(() => {
        photosService.getById(albumId).then(value => setPhotos(value))
    }, [albumId]);
    return (
        <div>
            {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export {PhotosPage};