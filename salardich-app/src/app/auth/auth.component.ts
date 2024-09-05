import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user = {
    id: 0,
    username: '',
    email: '',
    password: '',
    creaciones: []
  };

  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('Usuario registrado:', response);
      },
      (error) => {
        console.error('Error al registrar el usuario:', error);
      }
    );
  }

  // login() {
  //   this.authService.login(this.user).subscribe({
  //     next: (response) => {
  //       console.log('User logged in:', response);
  //       // Puedes guardar el token JWT aquí
  //     },
  //     error: (error) => {
  //       console.error('Error logging in:', error);
  //     }
  //   });
  // }
}
