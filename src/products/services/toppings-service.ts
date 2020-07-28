import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { injectable } from 'tsyringe';

@injectable()
export class ToppingsService {
   getToppings = () => {
      return ajax.getJSON('https://whispering-atoll-09064.herokuapp.com/api/toppings/')
         .pipe(catchError((error: any) => Observable.throw(error.json())));
   }
}