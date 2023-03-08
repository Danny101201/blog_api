import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    console.log('Before...LoggingInterceptor')
    const now = Date.now();
    return next
      .handle()
      //transform response data 
      .pipe(map(data => ({ data })))
    // .pipe(
    //   tap(() => console.log(`After... ${Date.now() - now}ms`)),
    // )
  }

}