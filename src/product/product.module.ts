import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { productRoutes } from "./product.routes";
import { ProductDetailComponent } from "./components/product-detail.component";
import { ProductQuickViewComponent } from "./components/product-quick-view.component";
import { ProductListComponent } from "./components/product-list.component";
import { SharedModule } from "../shared/shared.module";
import { ProductFilterByComponent } from "./components/product-filter-by.component";

@NgModule({
    declarations: [
        ProductDetailComponent,
        ProductQuickViewComponent,
        ProductListComponent,
        ProductFilterByComponent
    ],
    imports: [
        RouterModule.forChild(productRoutes),
        SharedModule
    ],
    exports: [
        ProductDetailComponent,
        ProductQuickViewComponent,
        ProductListComponent,
        ProductFilterByComponent
    ],
})
export class ProductModule {

}