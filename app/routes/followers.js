import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        var login = this.modelFor('users').login;
        return Ember.$.getJSON('https://api.github.com/users/' + login + '/followers').then(function(data) {
            return data;
        });
    }

});
