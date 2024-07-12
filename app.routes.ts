import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ProgettiComponent } from './progetti/progetti.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home" , component: HomeComponent},
    {path: "contatti" , component: ContattiComponent},
    {path: "chi-siamo" , component: ChiSiamoComponent},
    {path: "progetti" , component: ProgettiComponent},
];

