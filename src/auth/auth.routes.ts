import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login.component";

export const authRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }
]