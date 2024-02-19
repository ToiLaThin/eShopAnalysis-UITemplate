import { NgModule } from '@angular/core';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { CatalogCardComponent } from './layout/catalog-card.component';
import { ProductCardComponent } from './layout/product-card.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, CatalogCardComponent, ProductCardComponent],
    imports: [],
    providers: [],
    exports: [HeaderComponent, FooterComponent, CatalogCardComponent, ProductCardComponent]
})
export class CoreModule {}
