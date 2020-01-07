require('./bootstrap');


window.Vue = new Vue({
  el: '#app',
  props:["receiver_input","sender_input"],
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
  		if(this.sender_input != undefined && this.receiver_input != undefined && this.activeIndex != undefined){
  			var win = window.open('result?from='+this.sender_input+"&to="+this.receiver_input+"&video="+this.activeIndex, '_blank');
  			win.focus();
  		}else{
  			alert("some field missing");
  		}
  		
  	},
  	shareclick(){

  		if(this.sender_input != undefined && this.receiver_input != undefined && this.activeIndex != undefined){
  			str = "Some Text \n\n"+ 'http://localhost/'+ 'result?from='+this.sender_input+"&to="+this.receiver_input+"&video="+this.activeIndex;
  			urlencodedtext = encodeURIComponent(str);
  			var win = window.open('https://api.whatsapp.com/send?&text='+urlencodedtext);
  			win.focus();
  			window.location.href = 'https://www.facebook.com/AsiarayOutdoorAdvertising/?fref=nf';
  		}else{
  			alert("some field missing");
  		}

  	},
  	carouselchange(e){
  		this.activeIndex = e;
  	},
  	copytext(){
  		if(this.sender_input != undefined && this.receiver_input != undefined && this.activeIndex != undefined){
  			const el = document.createElement('textarea');
			  el.value = "Some Text \n\n"+ 'http://localhost/'+ 'result?from='+this.sender_input+"&to="+this.receiver_input+"&video="+this.activeIndex ;
			  document.body.appendChild(el);
			  el.select();
			  document.execCommand('copy');
			  document.body.removeChild(el);
  		}else{
  			alert("some field missing");
		  }
  	}
  }
})