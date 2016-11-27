import {createTutorialsRoutes} from 'angular-meteor-tutorials-infrastructure';
import {ANGULAR2_METEOR_SOCIALLY} from './angular2-meteor-socially';
import {TutorialsContainer} from '../website/tutorials-container/tutorials-container.component';
import {ANGULAR1_METEOR_SOCIALLY} from './angular-meteor-socially';
import {BLAZE_TO_ANGULAR2_MIGRATION} from './blaze-angular2-migration';
import {ANGULAR1_WHATSAPP_IONIC_CLI} from './angular1-whatsapp-ionic-cli';
import {ANGULAR1_WHATSAPP_METEOR_CLI} from './angular1-whatsapp-meteor-cli';
import {ANGULAR2_WHATSAPP_IONIC_CLI} from './angular2-whatsapp-ionic-cli';
import {AngularWhatsappIntro} from '../website/angular-whatsapp-intro/angular-whatsapp-intro.component';
import {ANGULAR2_WHATSAPP_METEOR_CLI} from "./angular2-whatsapp-meteor-cli";

export const SOCIALLY_TUTORIALS = [
  ANGULAR2_METEOR_SOCIALLY,
  ANGULAR1_METEOR_SOCIALLY
];

export const MIGRATION_TUTORIALS = [
  BLAZE_TO_ANGULAR2_MIGRATION
];

export const ANGULAR1_WHATSAPP_TUTORIALS = [
  ANGULAR1_WHATSAPP_IONIC_CLI,
  ANGULAR1_WHATSAPP_METEOR_CLI
];

export const ANGULAR2_WHATSAPP_TUTORIALS = [
  ANGULAR2_WHATSAPP_IONIC_CLI,
  ANGULAR2_WHATSAPP_METEOR_CLI
];

export const TUTORIALS_ROUTES = [
  {
    path: 'tutorials',
    children: [
      {path: 'whatsapp', component: TutorialsContainer, children: createTutorialsRoutes(ANGULAR1_WHATSAPP_TUTORIALS)},
      {path: 'whatsapp2', component: TutorialsContainer, children: createTutorialsRoutes(ANGULAR2_WHATSAPP_TUTORIALS)},
      {path: 'whatsapp-tutorial', component: AngularWhatsappIntro},
      {path: 'whatsapp2-tutorial', component: AngularWhatsappIntro},
      {path: 'socially', component: TutorialsContainer, children: createTutorialsRoutes(SOCIALLY_TUTORIALS)},
      {path: 'migration', component: TutorialsContainer, children: createTutorialsRoutes(MIGRATION_TUTORIALS)}
    ]
  }
];
