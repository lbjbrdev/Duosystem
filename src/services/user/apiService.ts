import { AxiosPromise, AxiosRequestConfig } from 'axios';

import { IUser } from '../../models/user';
import { EMethodTypes } from '../../enums/methodTypes';

import { api } from '../../configs/axios';

export class UserApiService {
    getAll = (): AxiosPromise<IUser[]> => {
        const config: AxiosRequestConfig = {
            method: EMethodTypes.get,
            url: '/users'
        };

        return api(config);
    };

    create = (user: IUser): AxiosPromise<IUser> => {
        const config: AxiosRequestConfig = {
            method: EMethodTypes.post,
            url: '/users',
            data: user
        };

        return api(config);
    };
}