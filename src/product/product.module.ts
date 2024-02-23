import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { productRoutes } from "./product.routes";
import { ProductDetailComponent } from "./components/product-detail.component";
import { ProductQuickViewComponent } from "./components/product-quick-view.component";

@NgModule({
    declarations: [
        ProductDetailComponent,
        ProductQuickViewComponent
    ],
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        ProductDetailComponent,
        ProductQuickViewComponent
    ],
})
export class ProductModule {

}