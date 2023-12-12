import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerApiServiceService } from '../../shared/CRUD/customer-api-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  userLogged = false

  logout(){
    sessionStorage.clear()
    localStorage.clear()
    this.checkLogged()
  }

  ngOnInit(){
    this.checkLogged()
  }

  checkLogged(){
    if(localStorage.getItem("username") != null || sessionStorage.getItem("username") != null){
      this.userLogged = true
    }
    else{
      this.userLogged = false
    }
  }


}