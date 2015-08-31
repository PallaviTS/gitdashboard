import Ember from 'ember';

export default Ember.Controller.extend({
    userData: Ember.computed('model', function(){
        return{
            name: this.model
        };
    })
});
