import { Component, OnInit } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cubos: Array<Cubo> = [];

  constructor(private _service: ServiceCubos) {}

  ngOnInit(): void {
    this._service.getCubos().then((cubos: Cubo[]) => {
      this.cubos = cubos;
      console.log(this.cubos);
    });
  }  
}
