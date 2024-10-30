import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FacultadService } from '../services/facultad.service';
import { Facultad } from '../models/facultad';

@Component({
  selector: 'app-facultad',
  standalone: true,
  imports: [SidebarModule, RouterModule, CardModule, SidebarComponent, TableModule],
  templateUrl: './facultad.component.html',
  styleUrl: './facultad.component.css'
})
export class FacultadComponent implements OnInit {
  facultades: Facultad[] = [];

  constructor(private facultadService: FacultadService) { }

  ngOnInit(): void {
    this.obtenerFacultades();
  }

  obtenerFacultades(): void {
    this.facultadService.getFacultades().subscribe(
      (data: Facultad[]) => {
        this.facultades = data;
      },
      (error) => {
        console.error('Error al obtener las facultades', error);
      }
    );
  }
}
