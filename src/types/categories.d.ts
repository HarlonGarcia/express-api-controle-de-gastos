type ICategory = {
    id: string;
    name: string;
    color: string;
    user_id: string;
    created_at: string;
    updated_at: string;
}

type ICategoryPostRequest = Pick<ICategory, 'name', 'color', 'user_id'>;

type ICategoryPatchRequest = Partial<Pick<ICategory, 'name', 'color', 'user_id'>>;
