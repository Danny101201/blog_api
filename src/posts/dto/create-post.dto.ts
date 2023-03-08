import { IsNotEmpty, IsString, MinLength, IsOptional } from "class-validator";

export class CreatePostDto {
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  title: string;

  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  body: string;

  categories: string[]
}
