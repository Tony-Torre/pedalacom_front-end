import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// IMPORT CUSTOM COMPONENTS
import { CarouselComponent } from '../../model/carousel/carousel.component';
import { SalesSectionComponent } from '../../model/SalesSection/SalesSection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, SalesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
