Vue.component('taco-card', {
  data() {
    return {
      tagline: 'Think outside the bun',
      count: 0,
    };
  },
  props: {
    emoji: String,
  },
  template: `
    <div class="taco-card">
      <div @click="changeCount">
        {{ tagline }} and click me.
      </div>
      <div v-text="emoji"></div>
      <div>You clicked me {{ count }} times. 
        <span v-show="count > 5">Stop it!</span>
      </div>
    </div>
  `,
  methods: {
    changeCount() {
      this.count++;
    },
  },
});

const app = new Vue({
  el: '#container',
  data: {
    name: 'Taco Bell',
  },
});
