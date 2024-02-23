import { Routes } from "@angular/router";
import { ProductDetailComponent } from "./components/product-detail.component";
import { ProductQuickViewComponent } from "./components/product-quick-view.component";

export const productRoutes: Routes = [
    {
        path: '',
        component: ProductDetailComponent,        
    },
    {
        path: 'quickview',
        component: ProductQuickViewComponent,
    }
]