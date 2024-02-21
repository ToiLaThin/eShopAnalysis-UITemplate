import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { productRoutes } from "./product.routes";
import { ProductDetailComponent } from "./components/product-detail.component";

@NgModule({
    declarations: [
        ProductDetailComponent
    ],
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        ProductDetailComponent
    ],
})
export class ProductModule {

}