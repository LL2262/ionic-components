import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { timeout } from 'q';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.presentLoading('Espere...');

    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);
  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingCtrl.create({
      message: mensaje,
      //duration: 2000
    });
    return this.loading.present();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
