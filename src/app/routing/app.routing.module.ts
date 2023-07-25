import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  // The canActivate guard is used to implement authentication and authorization logic to the login and home routes
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }, // Default route for unknown paths
];

export const ROUTING = RouterModule.forRoot(routes);
