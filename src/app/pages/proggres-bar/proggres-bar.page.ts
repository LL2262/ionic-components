import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proggres-bar',
  templateUrl: './proggres-bar.page.html',
  styleUrls: ['./proggres-bar.page.scss'],
})
export class ProggresBarPage implements OnInit {

  porcentaje = 0.05;

  constructor() { }

  ngOnInit() {
  }

  cambioRango(event){
    this.porcentaje = event.detail.value / 100;
  }

}
