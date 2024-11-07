import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuantityPopupComponent } from '../components/quantity-popup/quantity-popup.component';
import { AddProductPopupComponent } from '../components/add-product-popup/add-product-popup.component';
import { RemoveProductPopupComponent } from '../components/remove-product-popup/remove-product-popup.component';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog) {}

  openQuantityPopup(productId: number) {
    this.dialog.open(QuantityPopupComponent, {
      data: { productId },
    });
  }

  closePopop() {
    this.dialog.closeAll();
  }

  openAddProductPopup() {
    this.dialog.open(AddProductPopupComponent);
  }

  openRemoveProductPopup(productId: number) {
    const dialogRef = this.dialog.open(RemoveProductPopupComponent, {
      data: { productId },
    });
    return dialogRef;
  }
}
