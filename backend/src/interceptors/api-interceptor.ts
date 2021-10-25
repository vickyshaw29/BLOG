import { rateLimit } from 'utils-decorators';
import { Injectable } from '@nestjs/common';
import { NestInterceptor } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CallHandler } from '@nestjs/common';

@Injectable()
export class RateLimitInterceptor implements NestInterceptor {
  @rateLimit({
    allowedCalls: 10,
    // 60sec
    timeSpanMs: 1000 * 60 * 60,
    keyResolver: (context: ExecutionContext) =>
      context.switchToHttp().getRequest().ip,
    exceedHandler: () => {
      throw new HttpException(
        'Rate limit exceeded',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    },
  })
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle();
  }
}
