import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const bootstrapAppPromise = platformBrowserDynamic().bootstrapModule(AppModule);
bootstrapAppPromise
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
