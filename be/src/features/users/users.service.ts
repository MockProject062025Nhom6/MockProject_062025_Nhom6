import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number) {
    const checkIsExist = await this.usersRepository.findOneBy({
      id: id
    });
    if (!checkIsExist) {
      throw new BadRequestException(`User with id ${id} does not exist`);
    }
    return await this.usersRepository.findOneBy({
      id: id
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.update({
      id: id,
    }, {
      ...updateUserDto,
    })
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
