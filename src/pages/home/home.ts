import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items:any = [];

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.getData();
  }

  getData(){
    let data: Observable<any>;
    data = this.http.get('https://newsapi.org/v2/top-headlines?sources=ign&apiKey=4370ceb1a6fe4e1ba693a36ce793609b');

    data.subscribe(result => {
      this.items = result.articles;
      console.log(result.articles);
    })
  }

}
