import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ServiceCubos from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-cubosmarca',
  templateUrl: './cubosmarca.component.html',
  styleUrls: ['./cubosmarca.component.css']
})
export class CubosMarcaComponent implements OnInit {
  cubos: Cubo[] | null = null;
  marca: string = '';

  constructor(private serviceCubos: ServiceCubos, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.marca = params['marca'];
      this.fetchCubosByMarca(this.marca);
    });
  }

  fetchCubosByMarca(marca: string): void {
    this.serviceCubos.getCubosMarca(marca).then((cubos: Cubo[]) => {
      this.cubos = cubos;
      console.log('Cubos:', this.cubos);
    });
  }
}
