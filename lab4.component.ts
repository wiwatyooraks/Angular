import { Component, Input } from '@angular/core';

@Component({
selector: 'app-lab4',
templateUrl: './lab4.component.html',
styleUrls: ['./lab4.component.css']

})
export class lab4Component {
    @Input()
    title:string;

    count = 0;
    items = [1,2,3,4,5,6,7,8,9,10];


    constructor() {
    } 
    countNumber() {
        this.count = this.count + 1;
    }

}