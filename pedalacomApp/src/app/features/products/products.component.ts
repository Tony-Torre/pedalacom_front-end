import { Component, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ProductsCardComponent } from '../../model/productsCard/products-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgbModule, ProductsCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  private offcanvasService = inject(NgbOffcanvas);
  
  value: string = 'Prezzo: In ordine crescente';
  page: number = 1;
  totalPage: number = 49;
  search: string = 'biciclette';
  isOffcanvasOpen: boolean = false;

  open(content: TemplateRef<any>) {

      this.offcanvasService.open(content,{ position: 'bottom', ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
        (result) => {
          this.toggleIcon()
        },
        (reason) => {
          this.toggleIcon()
        },
      );
    this.toggleIcon()
  }

  close() {
    this.offcanvasService.dismiss()
  }
  
  toggleIcon() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
  }

}