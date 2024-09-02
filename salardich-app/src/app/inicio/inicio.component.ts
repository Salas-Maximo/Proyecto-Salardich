import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service'; // Importa el servicio
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
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
