import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuantityPopupComponent } from '../components/quantity-popup/quantity-popup.component';
import { AddProductPopupComponent } from '../components/add-product-popup/add-product-popup.component';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog) {}

  OpenQuantityPopup(productId: number) {
    this.dialog.open(QuantityPopupComponent, {
      data: { productId },
    });
  }

  ClosePopop() {
    this.dialog.closeAll();
  }
  
  OpenAddProductPopup() {
    this.dialog.open(AddProductPopupComponent);
  }

}
