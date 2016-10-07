import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  nextId: Ember.computed('model.id', function() {
    return parseInt(this.get('model.id')) + 1;
  })
});
