import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/** Starts the Angular application with its root component and providers. */
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
