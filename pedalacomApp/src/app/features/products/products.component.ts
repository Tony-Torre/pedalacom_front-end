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
  isOffcanvasOpen: boolean = false;

  value: string = 'Prezzo: In ordine crescente';
  page: number = 1;
  totalPage: number = 49;
  search: string = 'biciclette';
  categoryList = ['Accessories', 'Bib-Shorts', 'Bike Racks','Bike Stands','Bikes','Bottles and Cages','Bottom Brackets','Brakes','Caps','Chains',
                  'Cleaners','Clothing','Components','Cranksets','Derailleurs','Fenders','Forks','Gloves','Handlebars','Headsets','Helmets',
                  'Hydration Packs','Jerseys','Lights','Locks','Mountain Bikes','Mountain Frames','Panniers','Pedals','Pumps','Road Bikes',
                  'Road Frames','Saddles','Shorts','Socks','Tights','Tires and Tubes','Touring Bikes','Touring Frames','Vests','Wheels']


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