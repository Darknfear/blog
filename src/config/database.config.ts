import { DataSourceOptions } from "typeorm";

import "dotenv/config";
import { join } from "path";
import User from "../common/entities/user.entity";

// "dist/src/commons/**/*.entity.{ts,js}",
//   join(__dirname, "**", "*.entity.{ts,js}");

const dbOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5433,
  database: process.env.DB_NAME || "blinx3",
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "123456",
  synchronize: true,
  logging: true,
  entities: [
    User
  ],
  migrations: ["./src/database/migrations/*.{ts,js}"],
  migrationsTableName: "custom_migration_table",
};

export default dbOptions;
