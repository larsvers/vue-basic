const app = new Vue({
  el: '#container',
  data: {
    name: 'Taco Bell',
    comicMode: false,
    products: ['Tacos', 'Burritos', 'Nachos', 'More tacos'],
  },
  methods: {
    changeComicMode() {
      this.comicMode = !this.comicMode;
    },
  },
});
