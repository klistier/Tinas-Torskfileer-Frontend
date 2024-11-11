import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { AuthGuard } from './models/authguard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: WarehouseComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
