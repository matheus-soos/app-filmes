import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmeComponent } from './components/filme/filme.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'filme/:id', component: FilmeComponent },
    { path: 'user', component: UserComponent }
];
