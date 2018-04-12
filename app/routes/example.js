import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('example', params.example_id)
  },
  actions: {
    delete (example) {
      example.destroyRecord()
    }
  }
})
