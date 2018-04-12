import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    saveExample (model) {
      model.save()
        .then(() => this.transitionTo('examples'))
    }
  }
})
