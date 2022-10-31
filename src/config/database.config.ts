import { DataSourceOptions } from "typeorm";

import "dotenv/config";

const dbOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5433,
  database: process.env.DB_NAME || "blog",
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "123456",
  synchronize: false,
  logging: true,
  entities: ["./src/common/entities/*.entity.{ts,js}"],
  migrations: ["./src/database/migrations/*.{ts,js}"],
  migrationsTableName: "custom_migration_table",
};

export default dbOptions;
