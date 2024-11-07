import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WarehouseService } from '../../services/warehouse.service';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-add-product-popup',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButton,
    MatFormField,
    MatInputModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './add-product-popup.component.html',
  styleUrl: './add-product-popup.component.css',
})
export class AddProductPopupComponent {
  productStock: number = 0;
  productName: string = '';

  constructor(
    private warehouseService: WarehouseService,
    private popupService: PopupService
  ) {}

  handleAddProduct() {
    this.warehouseService
      .addProduct(this.productName, this.productStock)
      .subscribe({
        next: (res) => {},
        error: (err) => {
          console.log(err);
        },
      });
    this.popupService.closePopop();
  }
}
