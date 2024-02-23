import { Routes } from "@angular/router";
import { CartComponent } from "./components/cart.component";

export const checkoutRoutes: Routes = [
    { path: '', redirectTo: 'cart', pathMatch: 'full' },
    { 
        path: 'cart',  
        component: CartComponent,
    }
]