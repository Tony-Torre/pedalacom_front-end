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

  constructor (private login: CustomerApiServiceService) {}

  runLogin(email: string, password: string)
  {
    this.login.loginCustomer(email, password).subscribe((resp)=>{
      if(resp.status == 200 || resp.status == 201){
        console.log("sei loggato")
        /* this.login.setLoggedToken(email, resp.body.customerId) */
        console.log(resp)
        
      }else{
        console.log("non sei loggato")
      }
    });
  }

  
}
