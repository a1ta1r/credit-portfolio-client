import {Model} from 'vue-mc'

export class Payment extends Model {
  defaults () {
    return {
      paymentDate: null,
      paymentAmount: null,
      paymentPlan: null
    }
  }
  routes () {
    return {
      fetch: '/payment/{id}',
      save: '/payment'
    }
  }
}