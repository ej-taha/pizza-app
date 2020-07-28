import { ajax } from 'rxjs/ajax';
import { injectable } from 'tsyringe';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pizza } from '../models/pizza';

@injectable()
export class PizzasService {
   getPizzas = () => {
      return ajax.getJSON('https://whispering-atoll-09064.herokuapp.com/api/pizzas/')
         .pipe(catchError((error: any) => Observable.throw(error.json())));
   }

   createPizza = (payload: Pizza) => {
      return ajax({
         url: 'https://whispering-atoll-09064.herokuapp.com/api/pizzas/',
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: payload
      }).pipe(catchError((error: any) => Observable.throw(error.json())));
   }

   updatePizza = (payload: Pizza) => {
      return ajax({
         url: `https://whispering-atoll-09064.herokuapp.com/api/pizzas/${payload._id}`,
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: payload
      }).pipe(catchError((error: any) => Observable.throw(error.json())));
   }

   removePizza = (payload: Pizza) => {
      return ajax.delete(`https://whispering-atoll-09064.herokuapp.com/api/pizzas/${payload._id}`)
         .pipe(catchError((error: any) => Observable.throw(error.json())));
   }
}