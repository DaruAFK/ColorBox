import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-game2',
    templateUrl: 'game2.html'
})
export class Game2Page {

    colors: string[];
    score: number[] = [0,0];
    array1: any[] = [];
    array2: any[] = [];
    matriz1: any[][] = [];
    matriz2: any[][] = [];
    test: any;
    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
        //aqui los colores
        this.colors = ['#ff5050', '#ffd633', '#3366ff',
            '#33cc33', '#cc6699', '#996633', '#652996', '#8d8d8d', '#292929', '#e28a17'];

        this.fillArrayColors(this.array1);
        this.fillArrayColors(this.array2);
        for(var i = 0; i < 3; i++){
            this.matriz1[i] = [];
            this.matriz2[i] = [];
        }
    }

    fillArrayColors(array){
        for(var i = 0; i < 5; i++){          
            array[i] = this.randomColor();  
        }
    }

    randomColor(){
        let random = Math.floor(Math.random() * this.colors.length);
        return this.colors[random];
    }

    play(player, column, color){
        this.setColorMatriz(player == 0 ? this.matriz1 : this.matriz2, column, color, player);        
    }

    setColorMatriz(matriz,column, color, player){
        for(var i = 0; i < 3; i++){
            if(!matriz[i][column]){
                matriz[i][column] = color;   
                this.setColorArray(player == 0 ? this.array1 : this.array2, column);
                this.setPoint(matriz, player);
                break;             
            }
        }
    }

    setColorArray(array, column){
        array[column] = this.randomColor();
    }

    setPoint(matriz, player){
        let combo = 1;
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 5; j++){
                if(matriz[i][j]){
                    let result = [];
                    this.validateMatriz(matriz,matriz[i][j],i,j,result);
                    if(result.length >= 3){
                        let sorted = result.sort((a, b) => b.i - a.i);
                        for(let r of sorted){
                            this.compact(matriz, r.i, r.j);
                        }
                        this.score[player] += result.length * combo;
                        combo++;
                    }
                }
            }
        }
    }

    compact(matriz, i, j){
        matriz[i][j] = null;
        while(i < 2){
            matriz[i][j] = matriz[i+1][j];
            matriz[i+1][j] = null;
            i++;
        }
    }

    moveArray(array: any[], direction){
        if(direction == 1){
            array.unshift(array.pop());
        }
        else{
            array.push(array.shift());
        }
    }

    validateMatriz(matriz, color, i, j, result: any[]){
        //validar si la posicion en la matriz i j es del mismo color que el parametro
        if(i >= 0 && i < 3 && j >= 0 && j < 5 && matriz[i][j] == color){
            if(!result.find((r)=> r.i == i && r.j == j)) {
                result.push({ i: i, j: j });
                this.validateMatriz(matriz, color, i + 1, j, result);
                this.validateMatriz(matriz,color, i - 1, j, result);
                this.validateMatriz(matriz, color, i, j + 1, result);
                this.validateMatriz(matriz,color, i, j - 1, result); 
            }      
        }
    }

    swipeEvent(e, array, rot) {
        this.moveArray(array, e.deltaX * rot > 0 ? 1 : -1);
    }

    leave() {
        this.navCtrl.pop();
    }
    
}
