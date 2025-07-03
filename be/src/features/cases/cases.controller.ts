import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CasesService } from './cases.service';
import { ResponseMessage } from 'src/decorator/customize';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';

@Controller('cases')
export class CasesController {
  constructor(private readonly caseService: CasesService) {}

  @Post()
  @ResponseMessage('Create case successfully')
  create(@Body() data: CreateCaseDto) {
    console.log({
      message: 'Received data for case creation',
      data,
    });
    return 'This action creates a case, but it is not implemented yet.';
    // return await this.caseService.create(data); // Uncomment this line when everything is set up
  }

  @Patch(':id')
  @ResponseMessage('Update case successfully')
  update(@Param('id') id: string, @Body() data: UpdateCaseDto) {
    console.log({
      message: 'Received data for update case',
      id,
      data,
    });
    return this.caseService.update(+id, data);
  }

  @Delete(':id')
  @ResponseMessage('Delete case successfully')
  delete(@Param('id') id: string) {
    console.log({
      message: 'Received request to delete case with id',
      id,
    });
    return 'This action deletes a case, but it is not implemented yet.';
    // return this.caseService.delete(+id); // Uncomment this line when everything is set up
  }

  @Get(':id')
  @ResponseMessage('Get case successfully')
  findOne(@Param('id') id: string) {
    console.log({
      message: 'Fetching case with id',
      id,
    });
    return 'This action returns a case, but it is not implemented yet.';
    // return this.caseService.findOne(+id);
  }

  @Get()
  @ResponseMessage('Get all cases successfully')
  findAll() {
    return 'This action returns all cases, but it is not implemented yet.';
    // return this.caseService.findAll(); // Uncomment this line when everything is set up
  }
}
