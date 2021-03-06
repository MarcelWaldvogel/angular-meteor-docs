# $meteor.collection   /   $scope.$meteorCollection

A service that wraps the [Meteor collections](http://docs.meteor.com/#/full/collections) to enable reactivity within Angular.

This service binds between the Angular `$scope` variables and the meteor collection.

---------------

> This module has been deprecated in favor of the new [helpers API](/api/1.3.1/helpers).

> There is no need for `$meteor.collection` anymore as with the helpers function we can use regular [Mongo.Collection](http://docs.meteor.com/#/full/mongo_collection) directly without any wrappers. Helpers will make sure to update Angular.
> We also removed `autobind` because it's a bad practice and we gain much better performance and easier maintainability both for the library and the apps developed with it.

> Here is an example for how to migrate:

Old code:

    $scope.parties = $scope.$meteorCollection(function(){
      Parties.find({}, {sort: {createdAt: -1}})
    });

    $scope.users = $scope.$meteorCollection(function(){
      Meteor.users.find({})
    });

New Code:

    $scope.helpers({
      parties() {
        return Parties.find({}, {sort: {createdAt: -1}});
      },
      users() {
        return Meteor.users.find({});
      }
    });


---------------

Service binding include 3 parts:

* watching the changes in **Angular $scope** and updating the **Meteor Collection**. (called "autobind")
* watching the changes in the **Meteor Collection** and updating the **Angular $scope** variables (called "observe")

The autobinding is optional, and can be set to false, so changes in the Angular $scope variables will have to be explicitly saved to the collection to be updated to the Meteor Collection.

The AngularMeteor collection can be explicitly stopped by calling the `stop()` function. It is important to stop the collection to avoid the increase in number of watchers.

Calling `$scope.$meteorCollection` is exactly the same as calling `$meteor.collection` but additionally it will automatically stop the collection when the scope is destroyed.

Therefore **using `$scope.$meteorCollection` is recommended use** over `$meteor.collection`.

----

## Usage

    $meteor.collection(collection, autobind)

    $scope.$meteorCollection(collection, autobind)

### Arguments



<table class="variables-matrix input-arguments">
<thead>
<tr>
  <th>Param</th>
  <th>Type</th>
  <th>Details</th>
  <th>Required</th>
  <th>Default</th>
</tr>
</thead>
<tbody>
<tr>
  <td>collection</td>
  <td>
    <a href="http://docs.meteor.com/#/full/collections" class="label type-hint type-hint-string">Meteor Collection Object</a>/
    <a href="http://docs.meteor.com/#/full/mongo_cursor" class="label type-hint type-hint-regexp">Reactive Function</a>
  </td>
  <td><p>A Meteor Collection or a reactive function to bind to.
    reactive function can be used with $scope.getReactively to add $scope variable as reactive variable to the cursor.</p></td>
  <td><a href="" class="label type-hint type-hint-array">Yes</a></td>
  <td></td>
</tr>
<tr>
  <td>autoClientSave</td>
  <td><a href="" class="label type-hint type-hint-boolean">Boolean</a></td>
  <td><p>By default, changes in the Angular collection will automatically update the Meteor collection.
    However if set to false, changes in the client won't be automatically propagated back to the Meteor collection.</p></td>
  <td><a href="" class="label type-hint type-hint-object">No</a></td>
  <td><a href="" class="label type-hint type-hint-boolean">True</a></td>
</tr>
<tr>
  <td>updateCollection</td>
  <td><a href="http://docs.meteor.com/#/full/collections" class="label type-hint type-hint-string">Meteor Collection Object</a></td>
  <td><p>A collection object which will be used for updates (insert, update, delete).</p></td>
  <td><a href="" class="label type-hint type-hint-object">No</a></td>
  <td></td>
</tr>
</tbody>
</table>


## Returns

<table class="variables-matrix return-arguments">
<tbody><tr>
  <td><a href="" class="label type-hint type-hint-object">object</a></td>
  <td><p>Newly created <a href="/api/AngularMeteorCollection">AngularMeteorCollection</a> object.
  </td>
</tr>
</tbody></table>


----

## Example


    // Define a new Meteor Mongo Collection
    Todos = new Mongo.Collection('todos');

    if (Meteor.isClient) {

      app.controller("mainCtrl", ['$scope', '$meteor',
        function($scope, $meteor){

          // Bind all the todos to $scope.todos
          $scope.todos = $meteor.collection(Todos);

          $scope.sticky = true;
          // Bind all sticky todos to $scope.stickyTodos
          // Binds the query to $scope.sticky so that if it changes,
          // Meteor will re-run the query and bind it to $scope.stickyTodos
          $scope.stickyTodos = $meteor.collection(function(){
            return Todos.find({sticky: $scope.getReactively('sticky')});
          });

          // Bind without auto-save all todos to $scope.notAutoTodos
          $scope.notAutoTodos = $scope.$meteorCollection(Todos, false).subscribe("publicTodos");

          // todo might be an object like this {text: "Learn Angular", sticky: false}
          // or an array like this:
          // [{text: "Learn Angular", sticky: false}, {text: "Hello World", sticky: true}]

          $scope.save = function(todo) {
            $scope.notAutoTodos.save(todo);
          };

          $scope.saveAll = function() {
            $scope.notAutoTodos.save();
          };

          $scope.autoSave = function(todo) {
            $scope.todos.push(todo);
          };

          // todoId might be an string like this "WhrnEez5yBRgo4yEm"
          // or an array like this ["WhrnEez5yBRgo4yEm","gH6Fa4DXA3XxQjXNS"]
          $scope.remove = function(todoId) {
            $scope.notAutoTodos.remove(todoId);
          };

          $scope.removeAll = function() {
            $scope.notAutoTodos.remove();
          };

          $scope.removeAuto = function(todo) {
            $scope.todos.splice( $scope.todos.indexOf(todo), 1 );
          }

          $scope.toSticky = function(todo) {
            if (angular.isArray(todo)){
              angular.forEach(todo, function(object) {
                object.sticky = true;
            });
            } else {
              todo.sticky = true;
            }

            $scope.stickyTodos.save(todo);
          };
        }
      ]);
    }

    if (Meteor.isServer) {

      // Returns all objects in the Todos collection with public set to true.
      Meteor.publish('publicTodos', function(){
        return Todos.find({public: true});
      });

      // Returns all objects in the Todos collection with public set to false.
      Meteor.publish('privateTodos', function(){
        return Todos.find({public: false});
      });

    }
