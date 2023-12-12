import { IsString, IsNumber, IsNotEmpty, MinLength } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'Name must have minimum length of 3 characters' })
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly age: number;

  @IsString()
  readonly breed: string;

  @IsString()
  readonly color: string;
}
