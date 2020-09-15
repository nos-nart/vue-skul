let PlanComponent = {
  template: '#plan-template',
  props: {
    name: String,
    isPicked: Boolean
  }
}

let PlanPickerComponent = {
  template: '#plan-picker-template',
  components: {
    plan: PlanComponent
  },
  data() {
    return {
      plans: ['Rose', 'Lotus', 'Sun flower', 'Daisy']
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'plan-picker': PlanPickerComponent
  }
})