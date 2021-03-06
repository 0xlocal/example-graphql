import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownersRepository: Repository<Owner>,
  ) {}

  create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownersRepository.create(createOwnerInput);

    return this.ownersRepository.save(newOwner);
  }

  findAll() {
    return this.ownersRepository.find();
  }

  findOne(id: number) {
    return this.ownersRepository.findOneOrFail(id);
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    if (this.findOne(id)) {
      return this.ownersRepository.save(updateOwnerInput);
    }
  }

  async remove(id: number) {
    const deletedOwner = await this.findOne(id);
    if (deletedOwner) {
      return this.ownersRepository.remove(deletedOwner);
    }
  }
}
