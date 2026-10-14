/*
* File: app.config.ts
* Author: Szabó József
* Copyright: 2026, Szabó József
* Group: SZOFT-II/N
* Date: 2026-10-14
* Github: https://github.com/CWGSkyStone/frontend_dolgozat
* Licenc: MIT
*/

import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
