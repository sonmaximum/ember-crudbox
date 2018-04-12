import Component from '@ember/component'

export default Component.extend({

  newExampleObj: {
    text: ''
  },

  actions: {
    newExample () {
      this.sendAction('create', this.get('newExampleObj'))
    }
  }
})
