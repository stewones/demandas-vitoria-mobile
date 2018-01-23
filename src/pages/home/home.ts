import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // constructor(public navCtrl: NavController) {

  // }
  quotes :any;

  private  apiUrl :string = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10"; 
    constructor(private http: Http, private socialSharing: SocialSharing ,public navCtrl: NavController) {
      this.getQuotes();
    }

  async getQuotes(){
    this.quotes = await this.http.get(this.apiUrl).map(res => res.json()).toPromise();
  }
}
