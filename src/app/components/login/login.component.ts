import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButton,
    FormsModule,
    MatInputModule,
    MatCardModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  handleLogin() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        this.authService.setLoginStatus(true);
        this.router.navigate(['/products']);
        this.errorMessage = '';
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = 'Felaktigt användarnamn/lösenord!';
      },
    });
  }

  handleLogout() {
    this.authService.logout().subscribe({
      next: (res) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
