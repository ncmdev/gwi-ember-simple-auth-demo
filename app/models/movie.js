import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  year: DS.attr('number'),
  poster_url: DS.attr('string'),
  in_queue: DS.attr('boolean')
});
