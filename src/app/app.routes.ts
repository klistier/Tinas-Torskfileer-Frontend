import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: WarehouseComponent },
];
