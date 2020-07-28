import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';

import * as fromActions from '../actions/toppings-actions';
import { Topping } from '../../models/topping';
import { ToppingsService } from '../../services';


export const fetchToppingsEpic = (action$, state$, { toppingsService }: { toppingsService: ToppingsService }) => {
   return action$.pipe(
      ofType(fromActions.LOAD_TOPPINGS),
      mergeMap(() => toppingsService
         .getToppings()
         .pipe(
            map((response: Topping[]) => new fromActions.LoadToppingsSuccess(response))
         )
      )
   );
};
