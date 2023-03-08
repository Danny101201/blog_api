import { Type } from "class-transformer";
import { IsBoolean } from "class-validator";

export class QueryDto {
  @IsBoolean()
  @Type(() => Boolean)
  posts: boolean = false
}