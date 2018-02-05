import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
    selector: 'page-game1',
    templateUrl: 'game1.html'
})
export class Game1Page implements OnDestroy {

    boxes: any[] = [];
    colors: string[];
    colorSelected: string;
    boxSelectedCount: number = 0;
    maxBoxSelected: number = 3;
    maxBoxes: number = 24;
    flag: boolean = true;
    score: number = 0;
    timer: Subscription;
    speed: number = 600;
    accel: number = 50;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public afDB: AngularFirestore) {
        //aqui los colores
        this.colors = ['#ff5050', '#ffd633', '#3366ff',
            '#33cc33', '#cc6699', '#996633', '#652996', '#8d8d8d'];

        this.timerUpdate(this.speed);
    }
    timerUpdate(time){
        if(this.timer){
           this.timer.unsubscribe();
        } 
        this.timer = Observable.timer(time, time).subscribe(t => {
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
    };
    showAlert(){
        let alert = this.alertCtrl.create({
          title: 'Game Over!',
          subTitle: 'You are a Loser! Score: ' + this.score,
          inputs: [
            {
              name: 'name',
              placeholder: 'Your name'
            },
          ],
          buttons: [{
              text:'Yes. i\' am :(',
              handler: data => {
                if(data.name && this.score > 0)
                    this.saveScore(data.name);
                this.navCtrl.pop();
              }
          }],
          enableBackdropDismiss: false
        });
        return alert.present();
    };     
    saveScore(name) {
        this.afDB.collection('scores').add({
            date: new Date(),
            name: name,
            score: this.score
        });
    }
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
                    if(this.score % 20 == 0 && this.accel > 10){
                        this.accel -= 10;
                    }
                    if(this.score % 10 == 0 && this.speed > 100){
                        this.speed -= this.accel;
                        this.timerUpdate(this.speed);
                    }
                }
            }
        }
    }

    ngOnDestroy(){
        if(this.timer){
            this.timer.unsubscribe();
        }
    }
}
