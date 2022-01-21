import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';
import { OwnersService } from '../owners/owners.service';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    private readonly ownersService: OwnersService,
  ) {}

  create(createPetInput: CreatePetInput) {
    const newPet = this.petRepository.create(createPetInput);
    return this.petRepository.save(newPet);
  }

  findAll() {
    return this.petRepository.find();
  }

  findOne(id: number) {
    return this.petRepository.findOneOrFail(id);
  }

  async update(id: number, updatePetInput: UpdatePetInput) {
    const oldPet = await this.findOne(id);
    if (oldPet) {
      return this.petRepository.save(updatePetInput);
    }
  }

  async remove(id: number) {
    const deletedPet = await this.findOne(id);
    if (deletedPet) {
      return this.petRepository.remove(deletedPet);
    }
  }

  getOwner(ownerId: number) {
    return this.ownersService.findOne(ownerId);
  }
}
