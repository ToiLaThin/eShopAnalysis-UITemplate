import { NgModule } from "@angular/core";
import { CartComponent } from "./components/cart.component";
import { RouterModule } from "@angular/router";
import { checkoutRoutes } from "./checkout.routes";

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        RouterModule.forChild(checkoutRoutes)
    ],
    providers: [],
    exports: [
        CartComponent
    ]
})
export class CheckoutModule {

}