import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// IMPORT CUSTOM COMPONENTS
import { CarouselComponent } from '../../model/carousel/carousel.component';
import { CardComponent } from '../../model/BikeCard/card.component';
import { SalesSectionComponent } from '../../model/SalesSection/SalesSection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CardComponent, SalesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
