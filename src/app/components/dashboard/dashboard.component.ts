import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'; 
import {MatTableModule} from '@angular/material/table';
import { ApiService } from '../../servicios/api.service';

export interface Estudiante {
  nombre: string;
  apellido: string;
  edad: number;
  carrera: string;
}
const estudiantes: Estudiante[] = [
  {nombre: 'Paola', apellido: 'Carasco', edad: 23, carrera: 'Ingenieria de Sistemas'},
  {nombre: 'Paola', apellido: 'Carasco', edad: 23, carrera: 'Ingenieria de Sistemas'},
  {nombre: 'Paola', apellido: 'Carasco', edad: 23, carrera: 'Ingenieria de Sistemas'},
  {nombre: 'Paola', apellido: 'Carasco', edad: 23, carrera: 'Ingenieria de Sistemas'},
  {nombre: 'Paola', apellido: 'Carasco', edad: 23, carrera: 'Ingenieria de Sistemas'},
  {nombre: 'Paola', apellido: 'Carasco', edad: 23, carrera: 'Ingenieria de Sistemas'}
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  datitos: any[] = [];
  constructor(private apiService: ApiService ){

  }
  ngOnInit(): void {
    this.mostrarestudiantes();
  }
  mostrarestudiantes(){
    this.apiService.getData().subscribe(datos =>{
      this.datitos= datos;
      console.log(this.datitos);
    } );

  }
  ///GET
  nombre_columnas: string[] = ['nombre', 'apellido', 'edad', 'carrera'];
  lista_estudiantes = estudiantes;
}
