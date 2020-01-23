require('./bootstrap');
import VueCarousel from '@chenfengyuan/vue-carousel';
window.Vue.use(VueCarousel);
import Carousel from './component/carosuel.vue';
window.Vue.use(Carousel);
window.Vue = new Vue({
  el: '#app',
  components: {Carousel},
  props:["receiverinput","senderinput","video"],
  data: function() {
    return { 
  		"activeIndex":0,
      "namedata":[
        "Boss","Me","Mum","Sunshine","Squad","Hubby","You","Dad","Uncle","Auntie","Sweetie","Wifey"
      ]
    }
  },
  methods:{
  	fbclick(){
  		window.location.href = 'https://www.facebook.com/AsiarayOutdoorAdvertising/?fref=nf';
  	},
  	previewclick(){
  		if(this.$refs.sendercarousel.getIndex() != undefined && this.$refs.receivercarousel.getIndex() != undefined && this.activeIndex != undefined){
  			window.location.href = ('result?from='+this.$refs.sendercarousel.getIndex()+"&to="+this.$refs.receivercarousel.getIndex()+"&video="+this.activeIndex );
  			
  		}else{
  			alert("some field missing");
  		}
  		
  	},
    editclick(){
      window.location.href = '/form';
    },
    moreclick(){
      window.location.href = '/form';

    },
  	shareclick(){

  		if(this.$refs.receivercarousel.getIndex() != undefined && this.$refs.sendercarousel.getIndex() != undefined && this.activeIndex != undefined){
  			var str = 'http://'+location.host+'/'+ 'result?from='+this.$refs.sendercarousel.getIndex()+"&to="+this.$refs.receivercarousel.getIndex()+"&video="+this.activeIndex;
  			var urlencodedtext = encodeURIComponent(str);
  			var win = window.open('https://api.whatsapp.com/send?&text='+urlencodedtext);
  			win.focus();
  			window.location.href = '/end';
  		}else{
  			alert("some field missing");
  		}

  	},
    shareclick2(){

      if(this.receiverinput != undefined && this.senderinput != undefined && this.activeIndex != undefined){
        var str = 'http://'+location.host+'/'+ 'result?from='+this.senderinput+"&to="+this.receiverinput+"&video="+this.video;
        var urlencodedtext = encodeURIComponent(str);
        var win = window.open('https://api.whatsapp.com/send?&text='+urlencodedtext);
        win.focus();
        window.location.href = '/end';
      }else{
        alert("some field missing");
      }

    },
  	carouselchange(e){
  		this.activeIndex = e;
  	},
    sizechange(){
      console.log("change");
    },
  	copytext(){
  		if(this.senderinput != undefined && this.receiverinput != undefined && this.activeIndex != undefined){
  			const el = document.createElement('textarea');
			  el.value = "Some Text \n\n"+ 'http://'+location.host+'/'+ 'result?from='+this.senderinput+"&to="+this.receiverinput+"&video="+this.activeIndex ;
			  document.body.appendChild(el);
			  el.select();
			  document.execCommand('copy');
			  document.body.removeChild(el);
  		}else{
  			alert("some field missing");
		  }
  	}
  },
  mounted: function () {
    this.receiverinput = this.$el.hasAttribute("receiverinput")?this.$el.attributes.receiverinput.value:null;
    this.senderinput = this.$el.hasAttribute("senderinput")?this.$el.attributes.senderinput.value:null;
    this.activeIndex = this.$el.hasAttribute("value")?this.$el.attributes.video.value:0;
    window.onresize = this.sizechange;
  }
})