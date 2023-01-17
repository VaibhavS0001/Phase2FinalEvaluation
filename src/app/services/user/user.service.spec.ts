import { inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { IUser } from 'src/app/user/user.model';

describe('UserService', () => {
  let service: UserService;
  let url: string = '/api/users/';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Users', inject(
    [HttpTestingController, UserService],
    (httpMock: HttpTestingController, service: UserService) => {
      let u: IUser[] = [
        {
          id: 1,
          email: 'vaib@gmail.com',
          password: 'password11',
          name: 'Vaibhav',
          role: 'Admin',
        },
        {
          id: 2,
          email: 'vaib1@gmail.com',
          password: 'password22',
          name: 'John Smith',
          role: 'User',
        },
      ];
      service.getUsers().subscribe((users) => {
        expect(u).toEqual(users);
      });
      const mockRequest = httpMock.expectOne(url);
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(u);
      httpMock.verify();
    }
  ));

  it('should create users', inject(
    [HttpTestingController, UserService],
    (httpMock: HttpTestingController, service: UserService) => {
      let u: IUser = {
        id: 3,
        email: 'vaib3@gmail.com',
        password: 'password13',
        name: 'Vaibhav3',
        role: 'User',
      };
      service.createUsers(u).subscribe((user) => {
        expect(u).toEqual(user);
      });
      const mockRequest = httpMock.expectOne(url);
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(u);
      httpMock.verify();
    }
  ));

  it('should update Users', inject(
    [HttpTestingController, UserService],
    (httpMock: HttpTestingController, service: UserService) => {
      let u = {
        id: 1,
        email: 'vaib@gmail.com',
        password: 'password14',
        name: 'Vaibhav',
        role: 'Admin',
      };
      service.updateUsers(u).subscribe((user) => {
        expect(u).toEqual(user);
      });
      const mockRequest = httpMock.expectOne(`${url}/${u.id}`);
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(u);
      httpMock.verify();
    }
  ));

  it('should delete User', inject(
    [HttpTestingController, UserService],
    (httpMock: HttpTestingController, service: UserService) => {
      let id = 1;
      service.deleteUsers(id).subscribe((user: any) => {
        expect(1).toEqual(user);
      });
      const mockRequest = httpMock.expectOne(`${url}/${id}`);
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(id);
      httpMock.verify();
    }
  ));
});
