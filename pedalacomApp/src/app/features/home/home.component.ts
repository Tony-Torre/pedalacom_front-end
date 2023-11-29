import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// IMPORT CUSTOM COMPONENTS
import { CarouselComponent } from '../../model/carousel/carousel.component';
import { SalesSectionComponent } from '../../model/salesSection/SalesSection.component';
import { CardComponent } from '../../model/homeCard/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, SalesSectionComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
