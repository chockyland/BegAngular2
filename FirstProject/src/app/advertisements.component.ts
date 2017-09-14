import { Component } from '@angular/core';
import {AdvertisementService} from './advertisement.service';

@Component({
    selector: 'advertisements',
    template: `<h2>Advertisements</h2>
    <ul>
       <li *ngFor ="let advChoc of advertisements">
            {{advChoc}}
       </li>
    </ul>
    `,
    providers: [AdvertisementService]
})
export class AdvertisementsComponent{
    //products = ["Learning Angular 2","Pro TypeScript","ASP.NET","ChockyLand Kenoby"];
    advertisements;

    constructor(advertisementService: AdvertisementService){
        this.advertisements = advertisementService.getAdvertisements();
    }
}