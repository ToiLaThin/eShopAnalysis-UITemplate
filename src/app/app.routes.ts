import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        loadChildren: () => import('../index/index.module').then(m => m.IndexModule)
    },
    {
        path: 'product',
        loadChildren: () => import('../product/product.module').then(m => m.ProductModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
    }
];
