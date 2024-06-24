/* FOR DOCS ... MUST MATCH ClickMeComponent template
  <button type="button" (click)="onClickMe()">Click me!</button>
*/

import {Component} from '@angular/core';

@Component({
  selector: 'app-click-me-gcds',
  template: ` <gcds-button type="button" (gcdsClick)="onClickMe()">Click me!</gcds-button>
    <gcds-pagination type="list" current-page="3" total-pages="20" (gcdsClick)="onClick($event)"></gcds-pagination>
    <gcds-input label="input" required name="input" input-id="red" (gcdsInput)="onInput($event)"></gcds-input>
    {{ clickMessage }}`,
})
export class ClickMeGcdsComponent {
  clickMessage = '';

  onClickMe() {
    console.log('clicked')
    this.clickMessage = 'You are my hero!';
  }

  onInput(event: any) {
    console.log(event)
  }
  onClick(event: any) {
    event.preventDefault();
    console.log(event.detail)
  }
}

