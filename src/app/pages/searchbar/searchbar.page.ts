import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums: any[] = [];
  textoBuscar = '';

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getAlbums().subscribe(res => {
      this.albums = res;
    });
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
  }

}
