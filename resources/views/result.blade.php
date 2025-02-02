<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token">
  <meta name="google-site-verification" content="-aHBTAJnBgoPa3Gi8-Uaugq7p3JYXj7rqZUxXrFb1ig" />
  <title>Asiaray SG CNY</title>
  <!-- Share Social Media-->
  <meta property="og:title" content="【Asiaray & TEL】presents: Chinese New Year blessings from a special person to you ❤" />
  <meta property="og:image" content="http://cny.asiaray.sg/images/thumbnail.jpg" />
  
  <!-- import CSS -->

  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css?v={{ env('js_version_number') }}">
  <link rel="stylesheet" type="text/css" href="/css/app.css?v={{ env('js_version_number') }}">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="/js/manifest.js?v={{ env('js_version_number') }}"></script>
  <script src="/js/vendor.js?v={{ env('js_version_number') }}"></script>
  <script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-124567671-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-124567671-2');
</script>


</head>
<body class="v-center">
  <div class="toplogo"></div>
  <div id="app" class="" receiverinput="{{ app('request')->input('to') }}" video="{{ app('request')->input('video') }}" senderinput = "{{ app('request')->input('from') }}">
    <el-container>
    <el-main>
    <el-row class="namedisplay"> To:<span class="name">@{{this.namedata[this.receiverinput]}}</span></el-row>
    <el-row>
      <div class="middlevideo" style=""class ="center">
        <video playsinline preload="metadata" autoplay id = "greetingvideo" loop  muted  src ="assets/{{ app('request')->input('video') }}.mp4"></video>
      </div>
    </el-row>
    <el-row class="namedisplay">From: <span class="name">@{{this.namedata[this.senderinput]}}</span> </el-row>

  <el-row :gutter="20">
     <el-col :span="12"><div style="max-width:150px;" class="center">
    <div class="editbutton" v-on:click="editclick" style="width:100%"></div>
    </div></el-col>
     <el-col :span="12"><div style="max-width:150px;" class="center">
    <div class="sharebutton" v-on:click="shareclick2" style="width:100%"></div>
    </div></el-col>
    
    </el-row>
  </el-main>
      
    
    </el-container>
  </div>
</body>
  <script src="/js/app.js?v={{ env('js_version_number') }}"></script>
  <script>
  var vid = document.getElementById("greetingvideo");
  vid.oncanplaythrough  = function() {
    console.log("videoplay");
      vid.play();
  };

  </script>
</html>