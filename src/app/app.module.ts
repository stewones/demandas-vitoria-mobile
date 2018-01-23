import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SobrePage } from '../pages/sobre/sobre';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';

import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {

  // constructor(private socialSharing: SocialSharing) {
  //   // Check if sharing via email is supported
  //   this.socialSharing.canShareViaEmail().then(() => {
  //     // Sharing via email is possible
  //   }).catch(() => {
  //     // Sharing via email is not possible
  //   });

  //   // Share via email
  //   this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
  //     // Success!
  //   }).catch(() => {
  //     // Error!
  //   });
  // }
}
