import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('../index/index.module').then(m => m.IndexModule)
    }
];
