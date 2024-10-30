import { Routes } from '@angular/router';
import { EscuelaComponent } from './escuela/escuela.component';
import { FacultadComponent } from './facultad/facultad.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        title:'home'
    },
    {
        path:'escuela',
        component:EscuelaComponent,
        title:'escu'
    },
    {
        path:'facultad',
        component:FacultadComponent,
        title: 'facu'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
