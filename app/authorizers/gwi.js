import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

const { isEmpty } = Ember;

export default BaseAuthorizer.extend({
  authorize(data, block) {
    const authToken = data.auth_token;
    
    if (!isEmpty(authToken)) {
      block('X-auth-token', authToken);
    }
  }
});
