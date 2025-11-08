import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.respository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }
}
