import Component from '@ember/component'

export default Component.extend({

  newExampleObj: {
    text: ''
  },

  actions: {
    newExample () {
      console.log('blah')
      this.sendAction('create', this.get('newExampleObj'))
      console.log(this.get('example'))
    }
  }
})
