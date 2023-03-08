import { IsNotEmpty, MinLength } from "class-validator";

export class CreateCategoryDto {

  @MinLength(2)
  @IsNotEmpty()
  name: string
}
