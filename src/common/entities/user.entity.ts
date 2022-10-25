import BaseEntity from "../base/entity.base";
import { Entity, Column } from "typeorm";

@Entity({ name: 'users' })
export default class User extends BaseEntity {
  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'age' })
  age: number;
}