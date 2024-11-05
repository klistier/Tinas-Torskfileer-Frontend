import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../../services/warehouse.service';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-warehouse',
  standalone: true,
  imports: [FormsModule, CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.css',
})
export class WarehouseComponent implements OnInit {
  products: Product[] = [];
  productName: string = '';
  description: string = '';
  productStock: number = 0;
  removeQuantity: number = 0;
  quantityDisplay: boolean = false;
  selectedProductId: number | null = null;
  columsToDisplay = ['id', 'name', 'stock', 'adjust'];

  constructor(private warehouseService: WarehouseService) {}
  ngOnInit(): void {
    this.RefreshProducts();
  }

  RefreshProducts() {
    this.warehouseService.GetAllProducts().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  HandleAddProduct() {
    this.warehouseService
      .AddProduct(this.productName, this.productStock)
      .subscribe({
        next: (res) => {
          this.RefreshProducts();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  HandleAddQuantity(id: number) {
    this.warehouseService.AddQuantity(id, this.productStock).subscribe({
      next: (res) => {
        this.RefreshProducts();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  HandleRemoveQuantity(id: number) {
    this.warehouseService.RemoveQuantity(id, this.removeQuantity).subscribe({
      next: (res) => {
        this.RefreshProducts();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  HandleRemoveProduct(id: number) {
    this.warehouseService.RemoveProduct(id).subscribe({
      next: (res) => {
        this.RefreshProducts();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ToggleQuantityPopUp(id: number) {
    this.quantityDisplay = !this.quantityDisplay;
    this.selectedProductId = id;
  }
}
