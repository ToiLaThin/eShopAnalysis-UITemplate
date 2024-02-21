import { NgModule } from '@angular/core';
import { HeaderTopbarComponent } from './layout/header-topbar.component';
import { FooterComponent } from './layout/footer.component';
import { HeaderBannerComponent } from './layout/header-banner.component';
import { IndexModule } from '../index/index.module';
import { CatalogCardComponent } from './layout/catalog-card.component';

@NgModule({
    declarations: [
        HeaderTopbarComponent,
        HeaderBannerComponent,
        FooterComponent,    
        CatalogCardComponent    
    ],
    imports: [
    ],
    providers: [],
    exports: [
        HeaderTopbarComponent,
        HeaderBannerComponent,
        FooterComponent,      
        CatalogCardComponent  
    ]
})
export class CoreModule {}
