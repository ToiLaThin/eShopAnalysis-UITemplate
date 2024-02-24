import { NgModule } from '@angular/core';
import { BreadCrumbComponent } from './components/breadcrumb.component';
import { ProductCardComponent } from './components/product-card.component';
import { ProductListCardComponent } from './components/product-list-card.component';

@NgModule({
    declarations: [BreadCrumbComponent, ProductCardComponent, ProductListCardComponent],
    imports: [],
    exports: [BreadCrumbComponent, ProductCardComponent, ProductListCardComponent]
})
export class SharedModule {}
