import { NgModule } from "@angular/core";
import { CatalogCardComponent } from "./components/catalog-card.component";
import { FeatureCardComponent } from "./components/feature-card.component";
import { TestimonialCardComponent } from "./components/testimonial-card.component";
import { ProductCardComponent } from "../shared/components/product-card.component";
import { IndexComponent } from "./index.component";
import { RouterModule } from "@angular/router";
import { indexRoutes } from "./index.routes";
import { BannerComponent } from "./components/banner.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [        
        FeatureCardComponent,
        TestimonialCardComponent,
        BannerComponent,
        CatalogCardComponent,
        IndexComponent,        
    ],
    imports: [
        RouterModule.forChild(indexRoutes),
        SharedModule
    ],
    exports: [        
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