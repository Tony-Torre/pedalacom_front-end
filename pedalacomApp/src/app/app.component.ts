// IMPORT NATIVE COMPONENTS
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // To import if API call in Child Module
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // for SPA RouteLinks
import { NavbarComponent } from './core/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HttpClientModule, NgbModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pedalacomApp';
  constructor(private NgbModule: NgbModule) { }
}

