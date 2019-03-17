import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getUsers(){
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(){ 
    return this._http.get<Componente[]>('assets/data/menu.json');
  }

  getAlbums(){ 
    return this._http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes(){ 
    return this._http.get('assets/data/superheroes.json');
  }
}
