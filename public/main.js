Vue.component('picsumImage', {
  template: "#picsumImageTemplate",
  props: {
    id: Number,
    author: String,
    width: Number,
    height: Number,
    url: String,
    download_url: String
  }
});

var app = new Vue({
  el: '#app',
  data: {
    images: []
  },
  methods: {
    fetchItems: function(){
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var parsedImageList = JSON.parse(this.responseText);
          var i;
          for (i =0; i < parsedImageList.length; i++) {
            app.images.push({
              id: parsedImageList[i].id,
              author: parsedImageList[i].author,
              width: parsedImageList[i].width,
              height: parsedImageList[i].height,
              url: parsedImageList[i].url,
              download_url: parsedImageList[i].download_url }
            )
          }
        }
      };
      xmlhttp.open("GET", "https://picsum.photos/v2/list", true);
      xmlhttp.send();
    }
  }
});
app.fetchItems();