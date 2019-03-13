import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  public form = [
    { name: 'primary', isChecked: true },
    { name: 'secondary', isChecked: false },
    { name: 'tertiary', isChecked: true },
    { name: 'success', isChecked: false }
  ];

  constructor() { }
  

  ngOnInit() {
  }

}
