import { Component } from '@angular/core';

@Component ({
    selector: 'app-catergory',
    templateUrl: './catergory.component.html',
    styleUrls: ['./catergory.component.css']
})
export class CatergoryComponent {
    items: string[] = ['New1', 'New2', 'New3']
}
