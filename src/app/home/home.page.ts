import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public reorderItems($event: Event): void {
    const customEvent: CustomEvent<ItemReorderEventDetail> = $event as CustomEvent<ItemReorderEventDetail>;
    customEvent.detail.complete();
  }
}
