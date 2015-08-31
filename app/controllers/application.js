import Ember from 'ember';

export default Ember.Controller.extend({
    userData: Ember.computed('model', function(){
        return{
            login: this.model.mapBy('login')
        };
    })

});
