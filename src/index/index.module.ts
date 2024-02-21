import { NgModule } from "@angular/core";
import { CatalogCardComponent } from "../core/layout/catalog-card.component";
import { FeatureCardComponent } from "./components/feature-card.component";
import { TestimonialCardComponent } from "./components/testimonial-card.component";
import { ProductCardComponent } from "./components/product-card.component";
import { IndexComponent } from "./index.component";
import { RouterModule } from "@angular/router";
import { indexRoutes } from "./index.routes";

@NgModule({
    declarations: [
        ProductCardComponent,
        FeatureCardComponent,
        TestimonialCardComponent,
        IndexComponent,        
    ],
    imports: [
        RouterModule.forChild(indexRoutes)
    ],
    exports: [
        ProductCardComponent,
        FeatureCardComponent,
        TestimonialCardComponent,
        IndexComponent
    ],    
})
export class IndexModule {
    constructor() {}
}