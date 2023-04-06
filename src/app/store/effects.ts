import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getData, getDataFailure, getDataSuccess } from './actions';
import { catchError, mergeMap, map, of } from 'rxjs';
import { MainService } from '../services/get-data.service';

@Injectable()
export class Effects {
  constructor(private actions$: Actions, private mainService: MainService) {}

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getData),
      mergeMap((action) =>
        this.mainService.getData().pipe(
          map((response) => getDataSuccess({ todos: response })),
          catchError(() => of(getDataFailure()))
        )
      )
    )
  );
}
