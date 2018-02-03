import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'page-game2',
    templateUrl: 'game2.html'
})
export class Game2Page {

    boxes: any[] = [];
    colors: string[];
    score1: number = 0;
    score2: number = 0;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
        //aqui los colores
        this.colors = ['#ff5050', '#ffd633', '#3366ff',
            '#33cc33', '#cc6699', '#996633', '#652996', '#8d8d8d'];
    }
    
}
