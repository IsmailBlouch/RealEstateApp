import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-property-card',
    // template: 'I am Property card component'
    templateUrl: './property-card.component.html',
    styleUrl: './property-card.component.scss'
})
export class PropertyCardComponent{

    propety: any = {
        "Id": 1,
        "Name": 'Bills House',
        "Type": 'House',
        "Price": 12000
    }

}