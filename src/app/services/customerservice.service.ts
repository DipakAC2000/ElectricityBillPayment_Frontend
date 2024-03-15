import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  customer: Customer;

  url ="http://localhost:8080/customer";
  getByUserIdurl = "http://localhost:8080/customer/customerProfile1"

  constructor(private customerService: HttpClient) { }

  postCustomer(customer: Customer): Observable<Customer> {
    return this.customerService.post<Customer>(this.url, customer);
  }

  getCustomerByUserID(userId : number): Observable<Customer> {
    return this.customerService.get<Customer>(this.getByUserIdurl + "/" + userId);
  }
}
