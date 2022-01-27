import React from 'react';

import {axiosService} from './axios.service';
import {urls} from '../configs/urls';

const usersService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getPostsById: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
};

export {usersService};