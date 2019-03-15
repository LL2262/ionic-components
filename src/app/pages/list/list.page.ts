import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;
  @ViewChild('lista') lista: IonList;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this._dataService.getUsers();
  }

  favorite(user) {
    this.lista.closeSlidingItems()
  }
  share(user) {
    this.lista.closeSlidingItems()
  }
  delete(user) {

  }

}
