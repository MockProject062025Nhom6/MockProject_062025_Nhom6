import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from 'src/decorator/customize';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }
  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }

  handleRequest(err, user, info, context: ExecutionContext) {
    // const request: Request = context.switchToHttp().getRequest();
    // const isSkipPermissions = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_PERMISSION, [
    //   context.getHandler(),
    //   context.getClass(),
    // ]);
    if (err || !user) {
      throw err || new UnauthorizedException("Token không hợp lệ hoặc đã hết hạn");
    }

    // check permissions
    // const targetMethod = request.method
    // const targetEndPoint = request.route?.path as string

    // const permissions = user?.permissions ?? [];
    // // console.log(permissions);

    // let isExist = permissions.find(permission =>
    //   targetMethod === permission.method
    //   &&
    //   targetEndPoint === permission.apiPath
    // )
    // if (targetEndPoint.startsWith("/api/v1/auth")) isExist = true
    // if (!isExist && !isSkipPermissions) {
    //   throw new ForbiddenException("Bạn không có quyền để truy cập endpoint");
    // }
    return user;
  }
}