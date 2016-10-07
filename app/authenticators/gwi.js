import Ember from 'ember';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import ENV from '../config/environment';

const {
  $: jQuery
} = Ember;

export default BaseAuthenticator.extend({

  authenticate(email, password) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      jQuery.ajax({
        url: 'https://gowatchit.com/api/v3/session/with_password',
        type: 'POST',
        data: {
          email,
          password,
          api_key: ENV.apiKey
        }
      }).then((response) => {
        resolve(response.session);
      }, (response) => {
        reject(response.responseJSON.session.message);
      });
    })
  },

  invalidate() {
    return jQuery.ajax({
      url: 'https://gowatchit.com/api/v3/session/logout',
      data: {
        api_key: ENV.apiKey
      }
    });
  },

  restore(data) {
    const authToken = data.auth_token;

    return new Ember.RSVP.Promise((resolve, reject) => {
      jQuery.ajax({
        url: 'https://gowatchit.com/api/v3/user/me',
        data: {
          api_key: ENV.apiKey,
          auth_token: authToken
        }
      }).then((user) => {
        user.auth_token = authToken;

        resolve(user);
      }, () => {
        reject();
      });
    });
  }
});
