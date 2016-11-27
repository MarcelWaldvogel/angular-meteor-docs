import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {PageTitleService} from "angular-meteor-tutorials-infrastructure";

@Component({
  selector: "angular-whatsapp",
  templateUrl: "./angular-whatsapp-intro.component.html"
})
export class AngularWhatsappIntro implements OnInit {
  private isAngular1 = true;

  constructor(private currentRoute: ActivatedRoute, title: PageTitleService) {
    title.setTitle('Angular 2 WhatsApp clone with Meteor & Ionic');
  }

  ngOnInit() {
    this.currentRoute.url.subscribe((url: Array<{path: string}>) => {
      this.isAngular1 = url[0].path === "whatsapp-tutorial";
    });
  }
}
