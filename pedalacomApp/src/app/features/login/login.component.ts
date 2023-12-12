import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerApiServiceService } from '../../shared/CRUD/customer-api-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [CustomerApiServiceService]
})
export class LoginComponent {

  constructor (private loginService: CustomerApiServiceService) {}

  remember: boolean = false;

  runLogin(event: Event, email: string, password: string) 
  {
    this.loginService.loginCustomer(email, password).subscribe({
      next:(data: any) => {
        console.log(data)
        this.loginService.setLoggedToken(email, data.body.firstName, data.body.customerId, this.remember)
      },
      error: (err: any)=>{
        console.log(err)
      }
    })
    event.preventDefault()
  }

  checkControl(){
    this.remember = !this.remember
  }

  /* runLogin(email: string, password: string)
  {
    this.login.loginCustomer(email, password).subscribe((resp)=>{
      if(resp.status == 200 || resp.status == 201){
        console.log("sei loggato")
        this.login.setLoggedToken(email, resp.body.customerId)
        console.log(resp)
        
      }else{
        console.log("non sei loggato")
      }
    });
  } */

  
}
