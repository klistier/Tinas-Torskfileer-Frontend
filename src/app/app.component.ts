import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WarehouseComponent } from "./components/warehouse/warehouse.component";
import { QuantityPopupComponent } from "./components/quantity-popup/quantity-popup.component";
import { NavComponent } from "./components/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WarehouseComponent, QuantityPopupComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tinas-Torskfileer-Frontend';
}
