import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users.interface';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  searchUser(query = '',page = ''){

    return this.http.get<Users>(`${environment.baseUrlApi}/?name=${query}&page=${page}`);
   
  }
  loginUsuario(username:string, password:string) {
    return this.http.post<Users>(`${environment.baseUrlApi}/login`, {username, password});
  }

  getDetailUser(id: string){
    return this.http.get<Users>(`${environment.baseUrlApi}/${id}`);
  }
  createUser(user: Users){
    return this.http.post<Users>(`${environment.baseUrlApi}`, user);
  }
}
