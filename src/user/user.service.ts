import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.insert(createUserDto);
  }

  async findAll() {
    const users = await this.usersRepository.find();
    users.forEach((user) => {
      delete user.password;
      delete user.email;
    });
    return users;
  }

  async findOne(id: ObjectID) {
    const user = await this.usersRepository.findOne(id);
    delete user.password;
    delete user.email;
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.save(updateUserDto);
  }

  remove(id: ObjectID) {
    return this.usersRepository.delete(id);
  }
}
