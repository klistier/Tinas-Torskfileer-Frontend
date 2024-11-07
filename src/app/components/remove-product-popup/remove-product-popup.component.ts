import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-remove-product-popup',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './remove-product-popup.component.html',
  styleUrl: './remove-product-popup.component.css',
})
export class RemoveProductPopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { productId: number },
    public dialogRef: MatDialogRef<RemoveProductPopupComponent>
  ) {}

  confirm() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }

  
}
