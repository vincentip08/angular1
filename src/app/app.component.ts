import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Vincent';
  item = [{
    nama : 'kelengkeng',
    harga : 10000
  }, {
    nama : 'Jeruk',
    harga : 5000
  }];

  itemArr=[1,2,3,4,5];

  show: boolean = false;

  pesan ='';
  klikButton(){
    this.pesan = 'ini pesan';
  }
}
