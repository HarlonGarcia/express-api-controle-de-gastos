import { BaseDTO } from '.';

export class CategoryDTO extends BaseDTO {
    static toResponse(category: ICategory) {
        return this.transform(category, {
            user_id: 'userId'
        });
    }

    static toResponseMany(categories: ICategory[]) {
        return this.transformMany(categories, {
            user_id: 'userId'
        });
    }
}
