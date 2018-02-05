import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MomentModule } from 'angular2-moment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
export const firebaseConfig = {
    apiKey: "AIzaSyA72FREGhy3_JhvVXiN2aNaqegdn-miHkM",
    authDomain: "color-box-5fa89.firebaseapp.com",
    databaseURL: "https://color-box-5fa89.firebaseio.com",
    projectId: "color-box-5fa89",
    storageBucket: "color-box-5fa89.appspot.com",
    messagingSenderId: "908131117137"
};

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Game1Page } from '../pages/game1/game1';
import { Game2Page } from '../pages/game2/game2';
import { ScoresPage } from '../pages/scores/scores';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Game1Page,
    Game2Page,
    ScoresPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Game1Page,
    Game2Page,
    ScoresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
