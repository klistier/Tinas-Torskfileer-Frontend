import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../../services/warehouse.service';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-warehouse',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.css',
})
export class WarehouseComponent implements OnInit {
  products: Product[] = [];
  columsToDisplay = ['id', 'name', 'stock', 'adjust'];

  constructor(
    private warehouseService: WarehouseService,
    private popupService: PopupService
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

  HandleRemoveProduct(id: number) {
    this.warehouseService.RemoveProduct(id).subscribe({
      next: (res) => {},
      error: (err) => {
        console.log(err);
      },
    });
  }

  OpenQuantityPopup(id: number) {
    this.popupService.OpenQuantityPopup(id);
  }


}
