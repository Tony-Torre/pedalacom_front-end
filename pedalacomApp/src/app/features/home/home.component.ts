import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// IMPORT CUSTOM COMPONENTS
import { CarouselComponent } from '../../model/carousel/carousel.component';
import { SalesSectionComponent } from '../../model/salesSection/SalesSection.component';
import { CardComponent } from '../../model/homeCard/card.component';
// IMPORT SERVICES
import { ProductApiServiceService } from '../../shared/CRUD/product-api-service.service';
import { Product } from '../../shared/dataModel/products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, SalesSectionComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ProductApiServiceService]
})
export class HomeComponent implements OnInit {

  products : Product[] = [];

  constructor (private apiProduct: ProductApiServiceService) {}

  GetProducts() {
    this.apiProduct.getProducts().subscribe({
      next: (data:any) => {
        this.products = data;
        console.log(this.products);
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.GetProducts();
 }
}
