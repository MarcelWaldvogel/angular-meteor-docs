# autorun

This method is a wrapper of [Tracker.autorun](http://docs.meteor.com/#/full/tracker_autorun) and shares exactly the same API.

The `autorun` method is part of the `ReactiveContext`, and available on every `context` and `$scope`.

The argument of this method is a callback, which will be called each time Autorun will be used.

The Autorun will stop automatically when when it's context ($scope) is destroyed.

------

### Arguments

<table class="variables-matrix input-arguments">
  <thead>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Details</th>
    <th>Required</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td><strong>runFunc</strong></td>
    <td>
      <a href="" class="label type-hint type-hint-function">Function</a>
    </td>
    <td>The function to run. It receives one argument: the Computation object that will be returned.</td>
    <td>Yes</td>
  </tr>
  </tbody>
</table>

------

### Example with `getReactively`:

    myModule.controller('MyCtrl', ['$scope', '$reactive', function($scope, $reactive) {
      $reactive(this).attach($scope);

      this.myVar = 10;

      this.autorun(() => {
        console.log('Autorun!!', this.getReactively('myVar'));
      });

      this.myVar = 50; // This will cause the autorun function method to run again
    }]);
