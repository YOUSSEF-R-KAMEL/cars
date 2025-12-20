import { HttpInterceptorFn } from '@angular/common/http';

export const globalInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'https://myfakeapi.com/api/cars/';
  const newReq = req.clone({
    url: baseUrl + req.url,
  });
  return next(newReq);
};
