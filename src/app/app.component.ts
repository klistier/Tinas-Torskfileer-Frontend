import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WarehouseComponent } from "./components/warehouse/warehouse.component";
import { QuantityPopupComponent } from "./components/quantity-popup/quantity-popup.component";
import { NavComponent } from "./components/nav/nav.component";
import { LoginComponent } from "./components/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WarehouseComponent, QuantityPopupComponent, NavComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tinas-Torskfileer-Frontend';
}
