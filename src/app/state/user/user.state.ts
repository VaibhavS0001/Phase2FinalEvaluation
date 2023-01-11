
import { IUser } from 'src/app/user/user.model';
import * as AppState from '../app.state';

export interface State extends AppState.AppState {
  users: UserState;
}
export interface UserState {
  currentUserId: number | null;
  users: IUser[];
  error: string;
}

export const initialState: UserState = {
  currentUserId: null,
  users: [],
  error: '',
};
