import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

export class PostInterceptor implements NestInterceptor {
  private readonly customHeader = 'my-custom-header';
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // console.log(context, 'before');
    return handler.handle().pipe(
      map((data: any) => {
        const request = context.switchToHttp().getResponse();
        // request.res.header[this.customHeader] = 'foo';
        return data;
      }),
    );
  }
}
