import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { email, password } = form.value;

      this.authService.login(email, password).subscribe(
        response => {
          console.log('Inicio de sesión exitoso:', response);
          // Aquí puedes manejar la respuesta del backend, como redirigir al usuario
        },
        error => {
          console.error('Error al iniciar sesión:', error);
          // Aquí puedes manejar los errores, como mostrar un mensaje de error
        }
      );
    }
  }
}
