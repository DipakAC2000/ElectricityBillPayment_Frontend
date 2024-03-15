import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Connection } from '../models/connection.model';
import { Observable } from 'rxjs';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionserviceService {

  connection:Connection;

  url = "http://localhost:8080/application"
  url1 = "http://localhost:8080/application/inactiveConnections"


  constructor(private http:HttpClient, private userService: UserserviceService) { }

  addConnection(customerId: number, connection: Connection): Observable<Connection> {
    return this.http.post<Connection>(this.url + "/" + customerId, connection);
  }

  getInactiveConnections(): Observable<Connection[]> {
    return this.http.get<Connection[]>(this.url1);
  }

  updateConnection(consumerNumber: number, connection: Connection): Observable<Connection> {
    //here we need to username and password by service method now for temporary purpose, we are using the constant terms 
    const username = 'RAJU'; 
    const password = 456783;  //this is the constant possword and username

    return this.http.put<Connection>(`${this.url}/${consumerNumber}?username=${username}&password=${password}`, connection);
    //return this.http.put<Connection>(this.url +"/" + consumerNumber , connection);
  }
}
