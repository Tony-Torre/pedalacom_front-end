import { Routes } from '@angular/router';
// NAVBAR ROUTES
import { HomeComponent } from './features/home/home.component';
import { ProductsComponent } from './features/products/products.component';
import { CartComponent } from './features/cart/cart.component';
import { ContactsComponent } from './features/contacts/contacts.component';
// IN-PAGE ROUTES
import { BikepageComponent } from './model/bikePage/bikepage.component';

export const routes: Routes = [
    // NAVBAR ROUTES
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'contacts', component: ContactsComponent},
    // IN-PAGE ROUTES
    {path: 'bike', component: BikepageComponent},
    //{path:'', redirectTo: 'home', pathMatch: 'full'} redirect path!
];
