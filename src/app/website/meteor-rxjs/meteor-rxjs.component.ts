import {Component} from '@angular/core';
import {PageTitleService} from "angular-meteor-tutorials-infrastructure";

@Component({
  selector: 'meteor-rxjs',
  templateUrl: './meteor-rxjs.component.html'
})
export class MeteorRxJsPage {
  constructor(title: PageTitleService) {
    title.setTitle('Angular-Meteor | Meteor-RxJS');

    title.setSeoDescription("Harness Meteor reactivity with RxJS");
    title.addKeywords([
      "meteor",
      "rxjs",
      "reactive extensions",
      "rx.js"
    ]);
  }
}
