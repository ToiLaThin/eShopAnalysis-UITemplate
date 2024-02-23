import { NgModule } from '@angular/core';
import { HeaderTopbarComponent } from './layout/header-topbar.component';
import { FooterComponent } from './layout/footer.component';
import { IndexModule } from '../index/index.module';
import { CatalogCardComponent } from '../index/components/catalog-card.component';
import { CartQuickViewComponent } from './layer/cart-quickview.component';
import { CatalogSideNavComponent } from './layer/catalog-sidenav.component';

@NgModule({
    declarations: [
        HeaderTopbarComponent,
        FooterComponent,    
        CartQuickViewComponent,
        CatalogSideNavComponent    
    ],
    imports: [
    ],
    providers: [],
    exports: [
        HeaderTopbarComponent,
        FooterComponent,      
        CartQuickViewComponent,
        CatalogSideNavComponent  
    ]
})
export class CoreModule {}
