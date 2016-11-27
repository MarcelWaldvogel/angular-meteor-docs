# angular-templates

Meteor package that compiles angular templates into the template cache.

## templateUrl

With Meteor 1.3 we can lazy-load files from `/imports` directory.
Using `angular-templates` you can easily avoid typing an absolute path of a template.

See an example:

```js
import templateUrl from './example.html';

angular.module('app', [
  'angular-templates' // or simply angular-meteor
])
  .component('example', {
    templateUrl,
    // other settings
  });
```

## $angularTemplatesSettings

This object contains general settings of the `angular-templates` module

### API

#### $angularTemplatesSettings.error *(boolean)*

Throwing an error if template is missing. This overwrites warning setting.

*Default:* `true`


#### $angularTemplatesSettings.warning *(boolean)*

Displaying a warning if template is missing.

*Default:* `true`

### Usage

    myModule.config(['$angularTemplatesSettings', function($angularTemplatesSettings) {
      // Turn off throwing errors
      $angularTemplatesSettings.error = false;

      // Turn off displaying warnings inside console
      $angularTemplatesSettings.warning = false;
    }]);
    