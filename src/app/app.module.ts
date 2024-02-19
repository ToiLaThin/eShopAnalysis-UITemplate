import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [
        // Components, Directives, and Pipes
        AppComponent
    ],
    imports: [
        // Modules
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        CommonModule,
        CoreModule
    ],
    providers: [
        // Services
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
