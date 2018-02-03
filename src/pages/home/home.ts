import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Game1Page } from '../game1/game1';
import { Game2Page } from '../game2/game2';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        public navCtrl: NavController,
        public platform: Platform
    ) {
    }

    close() {
        this.platform.exitApp();
    }
    
    swipeEvent(e) {
    }

    newGame1() {
        this.navCtrl.push(Game1Page);
    }

    newGame2() {
        this.navCtrl.push(Game2Page);
    }

}
