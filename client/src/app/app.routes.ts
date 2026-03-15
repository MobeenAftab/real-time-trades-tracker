import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { UserProfile } from './components/userprofile/user-profile';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home page',
    },
    {
        path: 'user/:id',
        component: UserProfile,
        title: 'User details',
    },
    { path: '**', component: Home },
];
