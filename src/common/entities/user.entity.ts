import BaseEntity from "../base/entity.base";
import { Entity, Column } from "typeorm";

@Entity({ name: "users" })
export default class User extends BaseEntity {
  @Column({ name: "email" })
  email: string;

  @Column({ name: "password" })
  password: string;

  @Column({ name: "first_name", nullable: true })
  firstName: string;

  @Column({ name: "last_name", nullable: true })
  lastName: string;

  @Column({ name: "phone", nullable: true })
  phone: string;

  @Column({ name: "age", nullable: true })
  age: number;
}