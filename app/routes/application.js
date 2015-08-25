import Ember from 'ember';
var Users;

Users = Ember.Route.extend({
    model: function(){
        return Ember.$.getJSON('https://api.github.com/users').then(function(data) {
            return data;
        });
    }
});

export default Users;
