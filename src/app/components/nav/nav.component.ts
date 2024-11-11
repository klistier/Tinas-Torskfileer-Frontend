import { Component } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { MatButton } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatButton, RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(
    private popupService: PopupService,
    private router: Router,
    public authService: AuthService
  ) {}

  isLoggedIn: boolean = false;

  openAddProductPopup() {
    this.popupService.openAddProductPopup();
  }

  displayLoginWindow() {
    this.router.navigate(['/login']);
  }

  handleLogout() {
    this.authService.setLoginStatus(false);
    this.authService.logout().subscribe({
      next: (res) => {
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
