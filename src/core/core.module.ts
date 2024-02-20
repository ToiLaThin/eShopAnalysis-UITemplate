import { NgModule } from '@angular/core';
import { HeaderTopbarComponent } from './layout/header/header-topbar.component';
import { FooterComponent } from './layout/footer.component';
import { CatalogCardComponent } from './layout/catalog-card.component';
import { ProductCardComponent } from './layout/product-card.component';
import { HeaderBannerComponent } from './layout/header/header-banner.component';

@NgModule({
    declarations: [HeaderTopbarComponent, HeaderBannerComponent, FooterComponent, CatalogCardComponent, ProductCardComponent],
    imports: [],
    providers: [],
    exports: [HeaderTopbarComponent, HeaderBannerComponent, FooterComponent, CatalogCardComponent, ProductCardComponent]
})
export class CoreModule {}
