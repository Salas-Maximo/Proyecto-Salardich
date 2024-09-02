import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  users: users[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMessage().subscribe((data: any) => {
      this.users = data.users;
    });
  }

  onSubmit() {
    // this.apiService.postMessage().subscribe(() => {
    //   this.apiService.getMessage().subscribe((data: any) => {
    //     this.users = data.users;
    //   });
    // });
  }
}
