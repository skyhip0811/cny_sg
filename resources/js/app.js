require('./bootstrap');


window.Vue = new Vue({
  el: '#app',
  props:["receiverinput","senderinput"],
  data: function() {
    return { 
  		"activeIndex":0
    }
  },
  methods:{
  	fbclick(){
  		window.location.href = 'https://www.facebook.com/AsiarayOutdoorAdvertising/?fref=nf';
  	},
  	previewclick(){
  		if(this.senderinput != undefined && this.receiverinput != undefined && this.activeIndex != undefined){
  			window.location.href = ('result?from='+this.senderinput+"&to="+this.receiverinput+"&video="+"1" );
  			
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

  		if(this.senderinput != undefined && this.receiverinput != undefined && this.activeIndex != undefined){
  			str = "Some Text \n\n"+ 'http://localhost/'+ 'result?from='+this.senderinput+"&to="+this.receiverinput+"&video="+"1";
  			urlencodedtext = encodeURIComponent(str);
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
  	copytext(){
  		if(this.senderinput != undefined && this.receiverinput != undefined && this.activeIndex != undefined){
  			const el = document.createElement('textarea');
			  el.value = "Some Text \n\n"+ 'http://localhost/'+ 'result?from='+this.senderinput+"&to="+this.receiverinput+"&video="+this.activeIndex ;
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
  }
})