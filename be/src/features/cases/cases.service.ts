import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Case } from './entities/case.entity';
import { Repository } from 'typeorm';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';

@Injectable()
export class CasesService {
  constructor(
    @InjectRepository(Case)
    private caseRepository: Repository<Case>,
  ) {}

  async create(data: CreateCaseDto) {
    const { caseNumber } = data;

    const isExist = await this.caseRepository.findOne({
      where: { caseNumber },
    });

    if (isExist) {
      throw new BadRequestException(
        `Case with number ${caseNumber} already exists.`,
      );
    }

    const newCase = this.caseRepository.create(data);

    return this.caseRepository.save(newCase);
  }

  async update(id: number, data: UpdateCaseDto) {
    const existedCase = await this.findOne(id);

    if (!existedCase) {
      throw new BadRequestException(`Case with id ${id} does not exist.`);
    }

    const updatedCase = this.caseRepository.merge(existedCase, data);

    return await this.caseRepository.save(updatedCase);
  }

  async delete(id: number) {
    const existedCase = await this.findOne(id);

    if (!existedCase) {
      throw new BadRequestException(`Case with id ${id} does not exist.`);
    }

    // Instead of deleting, we mark the case as deleted
    existedCase.isDeleted = true;

    return await this.caseRepository.save(existedCase);
  }

  async findOne(id: number) {
    return await this.caseRepository.findOne({
      where: { id },
    });
  }

  async findAll() {
    return await this.caseRepository.find();
  }
}
