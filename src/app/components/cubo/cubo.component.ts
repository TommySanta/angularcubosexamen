import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ServiceCubos from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.css']
})
export class CuboComponent implements OnInit {
  cubo: Cubo | null = null; // Detalles del cubo
  comentarios: any[] | null = null; // Lista de comentarios

  constructor(
    private route: ActivatedRoute,
    private service: ServiceCubos
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.getCubo(id).then((result) => {
        this.cubo = result;
        console.log('Cubo:', this.cubo);
      });

      this.service.getComentarios(id).then((result) => {
        this.comentarios = result;
        console.log('Comentarios:', this.comentarios);
      });
    }
  }
}
