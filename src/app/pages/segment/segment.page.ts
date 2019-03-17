import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;
  textoBuscar: string = '';

  constructor(private _dataService: DataService) { }

  superHeroes: Observable<any>;

  ngOnInit() {
    this.segment.value = "Todos";
    setTimeout(() => {
      this.superHeroes = this._dataService.getHeroes();
    },2000)
  }

  segmentChanged(event){
    const valorSegmento = event.detail.value;
    if(valorSegmento === "Todos")
    {
      this.textoBuscar = '';
      return;
    }
    this.textoBuscar = valorSegmento;
  }

}
