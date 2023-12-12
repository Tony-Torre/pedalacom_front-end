import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerApiServiceService } from '../../shared/CRUD/customer-api-service.service';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../shared/dataModel/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [CustomerApiServiceService]
})
export class RegisterComponent {

  remember: boolean = false;
  
  constructor( private registration : CustomerApiServiceService, private router: Router){}

  samePassword :boolean = false

  ngOnInit(){
    this.redirect()
  }
  
  PasswordCheck(password: string, checkPassword: string){
    if(password === checkPassword && password != ''){
      this.samePassword = true;
    } else{
      this.samePassword = false;
    }
  }

  redirect(){
    if(localStorage.getItem("username") || sessionStorage.getItem("username")){
      localStorage.setItem("register", "first_registration");
      this.router.navigate(['/']);
    }
  }

  checkControl(){
    this.remember = !this.remember
  }

  sendRegistration(title : string,firstName : string,middleName : string,lastName : string,email : string,password : string,companyName : string,phoneNumber : string){
    console.log("Ciao bello")
    let cst:  Customer =  new Customer() 
    cst = {
      Title : title ,
      FirstName  : firstName,
      MiddleName  : middleName,
      LastName  : lastName,
      EmailAddress  : email,
      PasswordHash  : password,
      CompanyName  : companyName,
      Phone  : phoneNumber,
    }
    this.registration.postCustomer(cst).subscribe((resp)=>{
      if(resp.status == 200 || resp.status == 201){
        this.registration.setLoggedToken(cst.EmailAddress, cst.FirstName, resp.body.customerId, this.remember)
        this.redirect()
      }else{
        console.log("non sei registrato")
      }
    });
  }
}
