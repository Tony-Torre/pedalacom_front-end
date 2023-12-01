import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomerApiServiceService {

  constructor(private http: HttpClient) { }

  // string initialization 
  customer: string = "";

  // Get all customers
  getCustomers(): Observable<any> {
    return this.http.get('https://localhost:7150/api/Customers');
  }

  // Get a customer by ID
  getCustomerById(): Observable<any> {
    return this.http.get(`https://localhost:7150/api/Customers/${this.customer}`);
  }

  // Add a new customer
  postCustomer(obj: Object): Observable<any> {
    return this.http.post('https://localhost:7150/api/Customers', obj);
  }

  // Update a customer
  putCustomer(customerId: string, obj: Object): Observable<any> {
    return this.http.put(`https://localhost:7150/api/Customers/${customerId}`, obj);
  }

  // Delete a customer
  deleteCustomer(customerId: string): Observable<any> {
    return this.http.delete(`https://localhost:7150/api/Customers/${customerId}`);
  }
}

