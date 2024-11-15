import { Component } from '@angular/core';
import { Router } from '@angular/router';
import ServiceCubos from '../../services/service.cubos';
import { UsuarioLogin } from '../../models/usuariologin';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string = '';
  password: string = '';

  constructor(private service: ServiceCubos, private router: Router) { }

  login(): void {
    const user = new UsuarioLogin(this.userName, this.password);

    console.log(user);

    this.service.login(user).then((response) => {
      environment.token = response.data.response;  // Guardar el token en un objeto global (puedes usar un servicio para esto también)
      console.log(response.data.response);

      // Emitir evento o navegar a otro componente
      this.router.navigate(['/perfil']);  // Redirigir a perfil o la página correspondiente
    }).catch((error) => {
      console.error('Error en login:', error);
    });
  }
}
