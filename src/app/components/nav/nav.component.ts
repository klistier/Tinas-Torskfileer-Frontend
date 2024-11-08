import { Component } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { MatButton } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatButton, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(private popupService: PopupService, private router: Router) {}

  openAddProductPopup() {
    this.popupService.openAddProductPopup();
  }

  displayLoginWindow() {
    this.router.navigate(['/login']);
  }
}
