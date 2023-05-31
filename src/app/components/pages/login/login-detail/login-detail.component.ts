import { Component, OnInit } from '@angular/core';
import { Users } from '@app/shared/interfaces/users.interface';

import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-login-detail',
  templateUrl: './login-detail.component.html',
  styleUrls: ['./login-detail.component.scss']
})
export class LoginDetailComponent implements OnInit {

  constructor(private usuariosService: UsersService) { }

  ngOnInit(): void {
  }

  registerUsuario(usuario:string, correo: string,contraseña: string, nombre: string, apellido: string){
  
    
    if(!usuario){
      alert("Campo usuario vacio");
      return;
    }
    if(!correo){
      alert("Campo correo vacio");
      return;
    }
    if(!contraseña){
      alert("Campo contraseña");
      return;
    }
    if(!nombre){
      alert("Campo nombre");
      return;
    }
    if(!apellido){
      alert("Campo apellido");
      return;
    }
    var result: Users =  {
      username: usuario,
      password: contraseña,
      email: correo,
      name: nombre,
      lastname: apellido
    }

    
    this.usuariosService.createUser(result)
      .subscribe( (res: any) => {
        console.log(res);
        if(res != null){
          alert("Usuario registrado");
        }else{
          alert("Usuario no registrado");
        }
      });
    }
    
   
    }

