import { NgModule } from "@angular/core";
import { CatalogCardComponent } from "./components/catalog-card.component";
import { FeatureCardComponent } from "./components/feature-card.component";
import { TestimonialCardComponent } from "./components/testimonial-card.component";
import { ProductCardComponent } from "./components/product-card.component";
import { IndexComponent } from "./index.component";
import { RouterModule } from "@angular/router";
import { indexRoutes } from "./index.routes";
import { BannerComponent } from "./components/banner.component";

@NgModule({
    declarations: [
        ProductCardComponent,
        FeatureCardComponent,
        TestimonialCardComponent,
        BannerComponent,
        CatalogCardComponent,
        IndexComponent,        
    ],
    imports: [
        RouterModule.forChild(indexRoutes)
    ],
    exports: [
        ProductCardComponent,
        FeatureCardComponent,
        TestimonialCardComponent,
        BannerComponent,
        CatalogCardComponent,
        IndexComponent
    ],    
})
export class IndexModule {
    constructor() {}
}