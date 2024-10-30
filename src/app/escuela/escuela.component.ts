import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { EscuelaService } from '../services/escuela.service';
import { Escuela } from '../models/escuela';

@Component({
  selector: 'app-escuela',
  standalone: true,
  imports: [SidebarModule, RouterModule, CardModule, SidebarComponent, TableModule],
  templateUrl: './escuela.component.html',
  styleUrls: ['./escuela.component.css']
})
export class EscuelaComponent implements OnInit {
  escuelas: Escuela[] = [];

  constructor(private escuelaService: EscuelaService) { }

  ngOnInit(): void {
    this.obtenerEscuelas();
  }

  obtenerEscuelas(): void {
    this.escuelaService.getEscuelas().subscribe(
      (data: Escuela[]) => {
        this.escuelas = data;
      },
      (error) => {
        console.error('Error al obtener las escuelas', error);
      }
    );
  }
}
