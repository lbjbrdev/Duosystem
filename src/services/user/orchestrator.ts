import { IUser } from '../../models/user';
import { UserApiService } from './apiService';

export class UserOrchestrator {
    userApiService = new UserApiService();
    
    getAll = async (): Promise<IUser[]> => {
        try {
            const response = await this.userApiService.getAll();

            if (response.status !== 200) throw response;

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    create = async (user: IUser): Promise<IUser> => {
        try {
            const response = await this.userApiService.create(user);

            if (response.status !== 201) throw response;

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
}