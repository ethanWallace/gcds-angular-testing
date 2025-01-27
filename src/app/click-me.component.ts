/* FOR DOCS ... MUST MATCH ClickMeComponent template
  <button type="button" (click)="onClickMe()">Click me!</button>
*/

import {Component} from '@angular/core';

@Component({
  selector: 'app-click-me',
  template: ` <button type="button" (click)="onClickMe()">Click me!</button>
    {{ clickMessage }}`,
})
export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/