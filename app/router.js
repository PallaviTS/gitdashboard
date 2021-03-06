import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('/users', function(){
      this.resource('users', { path: '/:login'}, function(){
          this.resource('repos');
          this.resource('followers');
      });
  });
});

export default Router;
