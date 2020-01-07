require('./bootstrap');


window.Vue = new Vue({
  el: '#app',
  data: function() {
    return { 
    	"test":1
    }
  },
  methods:{
  	fbclick(){
  		window.location.href = 'https://www.facebook.com/AsiarayOutdoorAdvertising/?fref=nf';
  	}
  }
})