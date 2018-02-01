import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    boxes: any[];
    colors: string[];

    constructor(public navCtrl: NavController) {
        //aqui los colores
        this.colors = ['red', 'blue'];
    }

}
