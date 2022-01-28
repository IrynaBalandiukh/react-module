import React from 'react';
import {Outlet, NavLink, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

import {usersService} from '../../services/users.service';
import Album from '../../components/AlbumComponent/Album';

const AlbumsPage = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        usersService.getAlbums(id).then(value => setAlbums(value))
    }, [id])

    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
            <Outlet/>
        </div>
    );
};

export {AlbumsPage}