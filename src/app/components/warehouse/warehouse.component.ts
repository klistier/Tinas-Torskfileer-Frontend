import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../../services/warehouse.service';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupService } from '../../services/popup.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-warehouse',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    ConfirmDialogModule,
    RouterModule
  ],
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.css',
  providers: [ConfirmationService, MessageService],
})
export class WarehouseComponent implements OnInit {
  products: Product[] = [];
  columsToDisplay = ['id', 'name', 'stock', 'adjust'];

  constructor(
    private warehouseService: WarehouseService,
    private popupService: PopupService,
  ) {}

  ngOnInit(): void {
    this.warehouseService.products$.subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  handleRemoveProduct(id: number) {
    this.warehouseService.removeProduct(id).subscribe({
      next: (res) => {},
      error: (err) => {
        console.log(err);
      },
    });
  }

  handleOpenQuantityPopup(id: number) {
    this.popupService.openQuantityPopup(id);
  }

  //öppnar popup för borttagning, tar bort om res = true
  handleOpenRemoveProductPopup(productId: number) {
    this.popupService
      .openRemoveProductPopup(productId)
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.handleRemoveProduct(productId);
        }
      });
  }
}
