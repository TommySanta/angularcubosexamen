import { Component, OnInit } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil: any = null;

  constructor(private service: ServiceCubos) { }

  ngOnInit(): void {
    this.getPerfilUsuario();
  }

  getPerfilUsuario(): void {
    this.service.getPerfilUsuario().then((result: any) => {
      this.perfil = result;
      console.log("Perfil:", this.perfil);
    });
  }
}
