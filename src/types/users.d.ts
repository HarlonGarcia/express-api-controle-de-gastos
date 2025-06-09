type IUser = {
    id: number;
    email: string;
    password: string;
    name: string;
    created_at: string;
    updated_at: string;
    currency?: string;
}

type IUserPostRequest = Pick<IUser, 'name', 'email', 'password'>
    & Partial<Pick<IUser, 'created_at' | 'updated_at'>>;

type IUserPatchRequest = Partial<Omit<IUser, 'id' | 'created_at' | 'updated_at'>>;