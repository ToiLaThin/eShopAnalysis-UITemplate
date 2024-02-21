import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login.component';
import { authRoutes } from './auth.routes';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoginComponent],
    imports: [RouterModule.forChild(authRoutes)],
    exports: [LoginComponent]
})
export class AuthModule {}
