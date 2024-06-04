export interface IUser {
    id?: string;
    fullName: string;
    email: string;
    password?: string;
    dateOfBirth: string;
    deleted?: boolean;
}