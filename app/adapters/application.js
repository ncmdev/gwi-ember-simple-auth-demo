import DS from 'ember-data';
import ENV from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:gwi',

  namespace: 'api/v3/',
  host: 'https://gowatchit.com',

  headers: {
    'X-api-key': ENV.apiKey
  }
});
