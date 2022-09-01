import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public promedio = 0;
  public suma = 0;
  public edadUno = 1;
  public edadDos = 1;
  constructor() {
  }

  ngOnInit(): void {
    this.Limpiar();
  }

  public Calcular(): void {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }
  public Limpiar(): void {
    this.promedio = 0
    this.suma = 0
    this.edadUno = 1
    this.edadDos = 1
  }
}
