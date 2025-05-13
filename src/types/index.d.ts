import { Knex } from 'knex';

interface ImportMetaEnv {
    NODE_ENV: "development" | "production";
    DATABASE_URL: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_USER: string;
    DB_NAME: string;
    DB_PASSWORD: string;
    DB_SSL: boolean;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare module 'knex/types/tables.js' {
    interface Tables {
        users: IUser;
        users_composite: Knex.CompositeTableType<
            IUser,
            IUserPostRequest,
            IUserPatchRequest,
        >;
    }
}