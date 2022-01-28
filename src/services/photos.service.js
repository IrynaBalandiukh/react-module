import React from 'react';

import {axiosService} from './axios.service';
import {urls} from '../configs/urls';

const photosService = {
    getById: (albumId) => axiosService.get(`${urls.albums}/${albumId}/photos`).then(value => value.data)
};

export {photosService};