import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../dataModel/customer';


@Injectable({
  providedIn: 'root'
})

export class CustomerApiServiceService {
  
  constructor(private http: HttpClient) { }
  
  headerOptions = new HttpHeaders({
    contentType: 'application/json',
    responseType: 'text'
  })
  
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
  postCustomer(obj: Customer): Observable<any> {
    this.setTokenHttpHeader(obj.Email, obj.Password)
    return this.http.post('https://localhost:7150/api/CwCustomers', obj, {headers : this.headerOptions, observe : 'response'});
  }
  
  // Update a customer
  putCustomer(customerId: string, obj: Object): Observable<any> {
    return this.http.put(`https://localhost:7150/api/Customers/${customerId}`, obj);
  }
  
  // Delete a customer
  deleteCustomer(customerId: string): Observable<any> {
    return this.http.delete(`https://localhost:7150/api/Customers/${customerId}`);
  }
  
  setTokenHttpHeader(user: string, password: string){
    this.headerOptions = 
      this.headerOptions.set('Authorization', 'Basic '+ btoa(user + ':' + password))
  }
}

