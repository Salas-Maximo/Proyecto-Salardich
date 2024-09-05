import { Component, OnInit } from '@angular/core';
import { SangucheService, Sanguche } from './inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  sanguches: Sanguche[] = [];
  newSanguche: Sanguche = {
    id: 0,
    nombre: '',
    ingredientes: []
  };

  constructor(private sangucheService: SangucheService) {}

  ngOnInit(): void {
    this.getSanguches();
  }

  getSanguches(): void {
    this.sangucheService.getAllSanguches().subscribe(
      (data) => {
        this.sanguches = data;
      },
      (error) => {
        console.error('Error fetching sanguches', error);
      }
    );
  }

  addSanguche(): void {
    this.sangucheService.addSanguche(this.newSanguche).subscribe(
      () => {
        this.getSanguches(); // Actualizar la lista después de agregar
        this.newSanguche = { id: 0, nombre: '', ingredientes: [] }; // Limpiar el formulario
      },
      (error) => {
        console.error('Error adding sanguche', error);
      }
    );
  }

  deleteSanguche(id: number): void {
    this.sangucheService.deleteSanguche(id).subscribe(
      () => {
        this.getSanguches(); // Actualizar la lista después de eliminar
      },
      (error) => {
        console.error('Error deleting sanguche', error);
      }
    );
  }
}
