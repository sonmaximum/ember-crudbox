import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('example')
  },
  actions: {
    delete (example) {
      example.destroyRecord()
    },
    createExample (example) {
      this.get('store').createRecord('example', example).save()
    },
    showSingle (example) {
      this.transitionTo('example', example.id)
      // this.transitionTo('examples/' + example.id)
    }
  }
})
