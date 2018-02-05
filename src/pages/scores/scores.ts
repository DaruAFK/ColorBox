import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'scores-page',
    templateUrl: 'scores.html'
})
export class ScoresPage implements OnInit {
    items: Observable<{}[]>;

    constructor(afDB: AngularFirestore) { 
        this.items = afDB.collection('scores', q => q.orderBy('score','desc').limit(100)).valueChanges();
    }

    ngOnInit() { 
        
    }
}