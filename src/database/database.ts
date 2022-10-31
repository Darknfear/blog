import { DataSource } from 'typeorm';
import dbOptions from "../config/database.config";

class DBContext extends DataSource {
  private static instance: DBContext;
  private constructor() {
    super(dbOptions);
  }

  static getInstance(): DBContext {
    if (!this.instance) {
      this.instance = new DBContext();
    }
    return this.instance;
  }
}
const DB = DBContext.getInstance();
export default DB;
