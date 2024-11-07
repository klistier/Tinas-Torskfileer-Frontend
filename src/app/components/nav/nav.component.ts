import { Component } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatButton],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(private popupService: PopupService) {}

  OpenAddProductPopup() {
    this.popupService.openAddProductPopup();
  }
}
