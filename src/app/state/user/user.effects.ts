import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private uService: UserService) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.uService.getUsers().pipe(
          map((users) => UserActions.loadUsersSuccess({ users })),
          catchError((error) =>
            of(UserActions.loadUsersFailure({ error }))
          )
        )
      )
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.updateUser),
      concatMap((action) => {
        return this.uService.updateUsers(action.user).pipe(
          map(() => action.user),
          map((user) => UserActions.updateUserSuccess({ user })),
          catchError((error) =>
            of(UserActions.updateUserFailure({ error }))
          )
        );
      })
    );
  });

  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.createUser),
      concatMap((action) =>
        this.uService.createUsers(action.user).pipe(
          map((user) => UserActions.createUserSuccess({ user })),
          catchError((error) =>
            of(UserActions.createUserFailure({ error }))
          )
        )
      )
    );
  });

  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.deleteUser),
      mergeMap((action) =>
        this.uService.deleteUsers(action.userId).pipe(
          map(() =>
            UserActions.deleteUserSuccess({ userId: action.userId })
          ),
          catchError((error) =>
            of(UserActions.deleteUserFailure({ error }))
          )
        )
      )
    );
  });
}
