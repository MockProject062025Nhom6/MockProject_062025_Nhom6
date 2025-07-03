import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCaseDto {
  @IsNotEmpty({ message: 'Case number is required' })
  caseNumber: number;

  @IsNotEmpty({ message: 'Type of case is required' })
  typeCase: string;

  @IsNotEmpty({ message: 'Severity is required' })
  severity: string;

  @IsNotEmpty({ message: 'Status is required' })
  status: string;

  @IsOptional()
  summary: string;
}
