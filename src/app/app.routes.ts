/*
* File: app.routes.ts
* Author: Szabó József
* Copyright: 2026, Szabó József
* Group: SZOFT-II/N
* Date: 2026-10-14
* Github: https://github.com/CWGSkyStone/frontend_dolgozat
* Licenc: MIT
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RombatloComponent } from './rombatlo/rombatlo.component';
export const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent,title:'Főoldal | Rombatlo'},
{path:'about',component:AboutComponent,title:'Névjegy | Rombatlo'},
{path:'rombatlo',component:RombatloComponent,title:'Rombusz számoló | Rombatlo'},
{path:'**',redirectTo:'home'}
];
