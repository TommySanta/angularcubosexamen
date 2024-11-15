import { Component, OnInit } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public marcas!: Array<string>;
  public selectedOption: string = 'login';
  public token: string | null = environment.token;

  constructor(private _service: ServiceCubos) {}

  ngOnInit(): void {
    this._service.getMarcas().then(r => this.marcas = r);
  }

}
