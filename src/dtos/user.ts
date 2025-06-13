import { BaseDTO } from '.';

export class UserDTO extends BaseDTO {
    static toResponse(user: IUser) {
        return this.transform(user, {
            money_format: 'moneyFormat',
        });
    }

    static toResponseMany(users: IUser[]) {
        return this.transformMany(users, {
            money_format: 'moneyFormat',
        });
    }
}
