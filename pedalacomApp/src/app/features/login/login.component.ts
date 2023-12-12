import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerApiServiceService } from '../../shared/CRUD/customer-api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [CustomerApiServiceService]
})
export class LoginComponent {

  constructor (private loginService: CustomerApiServiceService, private router: Router) {}

  remember: boolean = false;

  runLogin(event: Event, email: string, password: string) 
  {
    this.loginService.loginCustomer(email, password).subscribe({
      next:(data: any) => {
        console.log(data)
        this.loginService.setLoggedToken(email, data.body.firstName, data.body.customerId, this.remember)
        this.redirect()
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

  redirect(){
    if(localStorage.getItem("username") || sessionStorage.getItem("username")){
      localStorage.setItem("login", "first_access");
      this.router.navigate(['/']);
    }
  }

  ngOnInit(){
    this.redirect()
  }
}