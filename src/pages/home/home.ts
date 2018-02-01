import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    boxes: any[];
    colors: string[];
<<<<<<< HEAD
    colorSelected: string;
    boxSelectedCount: number = 0;
    maxBoxSelected: number = 3;
    maxBoxes: number = 50;

=======
>>>>>>> 380158bdc2bc5d30d2ae0e55f2866f05e6196449
    constructor(public navCtrl: NavController) {
        //aqui los colores
        this.colors = ['#0066ff', '#ff9933', '#009933',
        '#00ffcc', '#cc6699', '#cccc00', '#cc00ff', '#993300',
        '#00cc66', '#003300'];
        
        let timer = Observable.timer(2000,1000);
        timer.subscribe(t=>{
            let number = Math.floor(Math.random() * this.colors.length); 
            let color = this.colors[number];
            this.boxes.push({color: color});
        });

        
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
