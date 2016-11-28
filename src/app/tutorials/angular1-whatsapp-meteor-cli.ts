import {TutorialDefinition, ParsedPatchDefinition} from 'angular-meteor-tutorials-infrastructure';
import {improveThisCodeResolver} from "./improve-code-resolver";
import {Http} from "@angular/http";

const markdownUrlBase = '/master/manuals/';

export const ANGULAR1_WHATSAPP_METEOR_CLI: TutorialDefinition = {
  id: 'whatsapp-meteor-tutorial',
  name: 'WhatsApp Clone with Meteor CLI and Ionic',
  gitHub: 'Urigo/Ionic-MeteorCLI-WhatsApp',
  baseRoute: 'meteor',
  improveCodeUrlResolve: (tutorial: TutorialDefinition, patchDetails: ParsedPatchDefinition, filename: string, stepNumber: string, http: Http) => {
    return improveThisCodeResolver(markdownUrlBase, tutorial, patchDetails, filename, stepNumber, http);
  },
  steps: [
    {
      url: '/bootstrapping',
      name: 'Bootstrapping',
      template: markdownUrlBase + 'templates/step0.md',
      hideCodeDiff: true
    },
    {
      url: '/layout',
      name: 'Layout, coding style & structure',
      template: markdownUrlBase + 'templates/step1.md'
    },
    {
      url: '/realtime-meteor-server',
      name: 'Realtime Meteor server',
      template: markdownUrlBase + 'templates/step2.md'
    },
    {
      url: '/meteor-server-methods',
      name: 'Chat view and send messages',
      template: markdownUrlBase + 'templates/step3.md'
    },
    {
      url: '/authentication',
      name: 'Authentication',
      template: markdownUrlBase + 'templates/step4.md'
    },
    {
      url: '/modify-chats',
      name: 'Create and remove chats',
      template: markdownUrlBase + 'templates/step5.md'
    },
    {
      url: '/privacy',
      name: 'Privacy',
      template: markdownUrlBase + 'templates/step6.md'
    },
    {
      url: '/user-profile-picture',
      name: 'User profile picture',
      template: markdownUrlBase + 'templates/step7.md'
    },
    {
      url: '/image-upload',
      name: 'Send image messages',
      template: markdownUrlBase + 'templates/step8.md'
    },
    {
      url: '/summary',
      name: 'Summary',
      template: markdownUrlBase + 'templates/step9.md'
    }
  ]
};
