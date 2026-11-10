import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';
const redirect = sessionStorage.getItem('redirect');
if (redirect) {
  sessionStorage.removeItem('redirect');
  history.replaceState(null, '', redirect);
}
bootstrapApplication(AppComponent, appConfig).catch((error: unknown) => console.error(error));
