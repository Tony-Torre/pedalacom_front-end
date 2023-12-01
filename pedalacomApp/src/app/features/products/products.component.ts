import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// IMPORT CUSTOM COMPONENTS
import { ProductsCardComponent } from '../../model/productsCard/products-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductsCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  value: string = "Prezzo: In ordine crescente";
  page: number = 1
  totalPage: number = 49;
  search: string = "biciclette"

}
