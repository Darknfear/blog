import { MigrationInterface, QueryRunner } from "typeorm";

export class addFieldAgeToUser1666680156036 implements MigrationInterface {
    name = 'addFieldAgeToUser1666680156036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "age" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "age"`);
    }

}
