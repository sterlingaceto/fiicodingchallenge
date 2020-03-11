Vue.component('picsum-image', {
  props: ['picsum'],
  template: '<li>{{picsum.text}}</li>'
});

var app = new Vue({
  el: '#app',
  data: {
    image:
      { id: 0,
        author: "",
        width: 0,
        height: 0,
        url: "",
        download_url: ""
      }
  }

});