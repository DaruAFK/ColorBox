import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    boxes: any[];
    colors: string[];
    colorSelected: string;
    boxSelectedCount: number = 0;
    maxBoxSelected: number = 3;
    maxBoxes: number = 50;

    constructor(public navCtrl: NavController) {
        //aqui los colores
        this.colors = ['red', 'blue'];
    }

    selectBox(box) {
        if(!box.selected) {
            if(!this.colorSelected || box.color == this.colorSelected) {
                this.boxSelectedCount ++;
                box.selected = true;
                if(this.boxSelectedCount == this.maxBoxSelected){
                    //this.boxes.slice()
                }
            }
        }
    }

}
