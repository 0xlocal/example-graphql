import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialSchema1642741817536 implements MigrationInterface {
  name = 'initialSchema1642741817536';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "pet" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying, "ownerId" integer NOT NULL, CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "owner" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_8e86b6b9f94aece7d12d465dc0c" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "owner"`);
    await queryRunner.query(`DROP TABLE "pet"`);
  }
}
