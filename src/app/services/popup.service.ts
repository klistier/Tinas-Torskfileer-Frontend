import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuantityPopupComponent } from '../components/quantity-popup/quantity-popup.component';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog) {}

  OpenPopup() {
    this.dialog.open(QuantityPopupComponent);
  }
}
