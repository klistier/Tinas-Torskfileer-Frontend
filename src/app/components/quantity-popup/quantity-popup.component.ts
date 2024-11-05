import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-quantity-popup',
  standalone: true,
  imports: [MatDialogModule, MatButton],
  templateUrl: './quantity-popup.component.html',
  styleUrl: './quantity-popup.component.css'
})
export class QuantityPopupComponent {

}
