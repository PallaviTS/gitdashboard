import Ember from 'ember';

export default Ember.Controller.extend({
    repoData: Ember.computed('model', function(){
        return{
            language: this.model.mapBy('language'),
            repoName: this.model.mapBy('name')
        };
    })
});
