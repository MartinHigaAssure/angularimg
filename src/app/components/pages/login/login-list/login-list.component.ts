import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '@app/shared/interfaces/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.scss']
})
export class LoginListComponent implements OnInit {



  constructor( private usuariosService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUsuario(correo: string,contrasena: string){
    if(!correo){
      alert("Campo correo vacio");
      return;
    }
    if(!contrasena){
      alert("Campo contrase&ntidle;a");
      return;
    }
   
    var result=this.usuariosService.loginUsuario( correo, contrasena )
      .subscribe( (res: any) => {
        console.log(res);
        if(res != null){
          this.router.navigate(['/register', {param1: result}])
        }else{
          alert("Acceso denegado");
        }
      });

    }
    
    }
