/*
* File: main.ts
* Author: Szabó József
* Copyright: 2026, Szabó József
* Group: SZOFT-II/N
* Date: 2026-10-14
* Github: https://github.com/CWGSkyStone/frontend_dolgozat
* Licenc: MIT
*/

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
