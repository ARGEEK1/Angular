import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';

const departments: string[] = ['Marketing', 'Sales', 'Other', 'RRHH'];

export const dataServiceResolver: ResolveFn<
  any
> = (): Observable<any> => {
  return of(departments);
};
