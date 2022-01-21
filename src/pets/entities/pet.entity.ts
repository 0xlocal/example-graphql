import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Owner } from '../../owners/entities/owner.entity';

@Entity('pet')
@ObjectType()
@Unique('UQ_NAME', ['name'])
export class Pet {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @Column()
  @Field(() => Int)
  ownerId: number;

  @ManyToMany(() => Owner, (owner) => owner.pets)
  @Field(() => Owner)
  owner: Owner;
}
