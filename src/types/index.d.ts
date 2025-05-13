interface ImportMetaEnv {
    NODE_ENV: "development" | "production";
    PORT: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}