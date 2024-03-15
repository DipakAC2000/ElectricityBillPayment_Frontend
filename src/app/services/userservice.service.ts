import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  user : User;
 
  url= "http://localhost:8080/users";
  getByUserNameurl="http://localhost:8080/users/byUserName";
  registerurl ="http://localhost:8080/users/register"
  loginurl="http://localhost:8080/users/login";
  

  constructor(private userService: HttpClient) { }

  postUser(user: User): Observable<User> {
    return this.userService.post<User>(this.registerurl, user);
  }

  loginUser(user: User): Observable<User> {
    return this.userService.post<User>(this.loginurl, user);
  }

  getUsers(): Observable<User[]> {
    return this.userService.get<User[]>(this.url);
  }

  getUserbyUsername(username: string): Observable<User> {
    return this.userService.get<User>(this.getByUserNameurl + "/" + username )
  }
 
}
