import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUniqueOnPet1642742956436 implements MigrationInterface {
  name = 'addUniqueOnPet1642742956436';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "pet" ADD CONSTRAINT "UQ_d252745c2aa37bfa7c402b7f416" UNIQUE ("name")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "pet" DROP CONSTRAINT "UQ_d252745c2aa37bfa7c402b7f416"`,
    );
  }
}
