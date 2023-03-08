import { Type } from "class-transformer"
import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class QueryDto {
  @IsBoolean()
  @Type(() => Boolean)
  author: boolean = false

  @IsBoolean()
  @Type(() => Boolean)
  categories: boolean = false

}