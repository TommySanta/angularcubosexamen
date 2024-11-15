import { Component, OnInit } from '@angular/core'; // Ensure correct import path
import ServiceCubos from '../../services/service.cubos';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  compras: any[] = [];

  constructor(private service: ServiceCubos) {}

  ngOnInit(): void {
    this.getCompras();
  }

  getCompras(): void {
    this.service.getCompras().then((result: any[]) => {
      this.compras = result;
      console.log("Compras:", this.compras);
    });
  }
}
