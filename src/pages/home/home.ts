import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    boxes: any[] = [];
    colors: string[];
    colorSelected: string;
    boxSelectedCount: number = 0;
    maxBoxSelected: number = 3;
    maxBoxes: number = 24;
    flag: boolean = true;
    score: number = 0;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
        //aqui los colores
        this.colors = ['#0066ff', '#ff9933', '#009933',
            '#00ffcc', '#cc6699', '#cccc00', '#cc00ff', '#993300',
            '#00cc66', '#003300'];

        let timer = Observable.timer(1000, 500);
        timer.subscribe(t => {
            if(this.flag){
                if(this.boxes.length < this.maxBoxes) {
                    let number = Math.floor(Math.random() * this.colors.length);
                    let color = this.colors[number];
                    this.boxes.push({ color: color });
                }else{
                    this.flag = false;
                    this.showAlert();  
                }
            }            
        });
    }
    showAlert(){
        let alert = this.alertCtrl.create({
          title: 'Game Over!',
          subTitle: 'You are a Loser!',
          buttons: [{
              text:'Yes. i\' am :(',
              handler: () => {
                this.boxes = [];
                this.colorSelected = null;
                this.boxSelectedCount = 0;
                this.flag = true;
              }
          }],
          enableBackdropDismiss: false
        });
        return alert.present();
    };     
    selectBox(box) {
        if(!box.selected) {
            if(!this.colorSelected || box.color == this.colorSelected) {
                this.boxSelectedCount ++;
                box.selected = true;
                this.colorSelected = box.color;
                if(this.boxSelectedCount == this.maxBoxSelected){
                    this.boxes = this.boxes.filter(b => !b.selected);
                    this.boxSelectedCount = 0;
                    this.colorSelected = null;
                    this.score += 1;
                }
            }
        }
    }

}
