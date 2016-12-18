import Route from 'ember-route'
import inject from 'ember-service/inject'
import RSVP from 'rsvp'
import { later } from 'ember-runloop'

export default Route.extend({
  ajax: inject(),

  model() {
    return new RSVP.Promise((resolve, reject) => later(() => reject({
      status: 404,
      message: 'Can not found resource'
    }), 3000))
    // return this.get('ajax').request('/users')
  }
})