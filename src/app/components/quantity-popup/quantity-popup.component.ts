import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { WarehouseService } from '../../services/warehouse.service';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-quantity-popup',
  standalone: true,
  imports: [MatDialogModule, MatButton, FormsModule],
  templateUrl: './quantity-popup.component.html',
  styleUrl: './quantity-popup.component.css',
})
export class QuantityPopupComponent {
  constructor(
    private warehouseService: WarehouseService,
    private popupService: PopupService,
    @Inject(MAT_DIALOG_DATA) public data: { productId: number }
  ) {}

  quantity: number = 0;

  HandleAddQuantity() {
    this.warehouseService
      .AddQuantity(this.data.productId, this.quantity)
      .subscribe({
        next: (res) => {},
        error: (err) => {
          console.log(err);
        },
      });
    this.popupService.ClosePopop();
  }

  HandleRemoveQuantity() {
    this.warehouseService
      .RemoveQuantity(this.data.productId, this.quantity)
      .subscribe({
        next: (res) => {},
        error: (err) => {
          console.log(err);
        },
      });
    this.popupService.ClosePopop();
  }
}
