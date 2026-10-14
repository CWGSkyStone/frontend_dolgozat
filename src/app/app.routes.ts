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
