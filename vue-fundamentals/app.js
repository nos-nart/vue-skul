let PlanItemComponent = {
  template: '#plan-template',
  props: {
    name: {
      type: String,
      required: true
    },
    selectedPlan: {
      type: String
    }
  },
  computed: {
    isSelected() {
      return this.name === this.selectedPlan
    }
  },
  methods: {
    picking() {
      this.$emit('select', this.name)
    }
  }
}

let PlanPickerComponent = {
  template: '#plan-picker-template',
  components: {
    'plan-item': PlanItemComponent
  },
  data() {
    return {
      plans: ['Rose', 'Lotus', 'Sun flower', 'Daisy'],
      selectedPlan: null
    }
  },
  methods: {
    onPickPlan(plan) {
      console.log("onPickPlan -> plan", plan)
      this.selectedPlan = plan
    }
  },
}

new Vue({
  el: '#app',
  components: {
    'plan-picker': PlanPickerComponent
  }
})
