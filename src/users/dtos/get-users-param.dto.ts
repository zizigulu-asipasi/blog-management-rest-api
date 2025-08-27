import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class getUsersParamDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
