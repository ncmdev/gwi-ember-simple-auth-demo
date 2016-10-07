import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate() {
      const { identification, password } = this.getProperties('identification', 'password');

      this.get('session').authenticate('authenticator:gwi', identification, password).then(() => {
        this.transitionToRoute('movies', 1);
      }).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
