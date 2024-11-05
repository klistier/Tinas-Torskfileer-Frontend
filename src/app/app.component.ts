import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WarehouseComponent } from "./components/warehouse/warehouse.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WarehouseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tinas-Torskfileer-Frontend';
}
