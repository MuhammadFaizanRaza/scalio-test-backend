import { IsNotEmpty } from 'class-validator';

export class IDParamDto {
  @IsNotEmpty()
  id: number;
}
