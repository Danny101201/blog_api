import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtStrategy } from '../strategy/jwt.stragy';
export const ReqUser = createParamDecorator(
  (data: keyof Awaited<ReturnType<JwtStrategy['validate']>>, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    return data ? request.user[data] : request.user;
  },
);