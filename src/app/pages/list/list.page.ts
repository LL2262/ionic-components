import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;
  @ViewChild('lista') lista: IonList;

  constructor(private _dataService: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.usuarios = this._dataService.getUsers();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1000,
      color: 'primary',
      cssClass: 'black'
    });
    toast.present();
  }

  favorite(user) {
    this.presentToast('Guardo en favoritos');
    this.lista.closeSlidingItems()
  }
  share(user) {
    this.lista.closeSlidingItems()
  }
  delete(user) {

  }

}
