import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  redirectToUrl!: string;
  url: string = '/api/users/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }

  createUsers(user: IUser): Observable<IUser> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<IUser>(this.url, user, { headers });
  }

  updateUsers(user: IUser): Observable<IUser> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<IUser>(`${this.url}/${user.id}`, user, { headers });
  }

  deleteUsers(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
