<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token">
  <meta name="google-site-verification" content="-aHBTAJnBgoPa3Gi8-Uaugq7p3JYXj7rqZUxXrFb1ig" />
  <title>Asiaray SG CNY</title>
  <meta name='description' content ="Asiaray says Happy Chinese new year to Singapore">
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
<body class="ot">
  <div class="toplogo"></div>
  <div id="app" class="wrapper">
    <el-container>
    <el-main>
    <el-row class="nameinput" >

    

<!--       <el-input id="input_receiver" v-model="receiverinput" placeholder="Receiver"></el-input> -->
      <carousel ref ="receivercarousel" actived="0" sis="To"></carousel>
      </el-col>
     
    </el-row>
    <el-row >
      <div class ="carouseldiv">
        <el-carousel  indicator-position='none'  v-on:change="carouselchange" :autoplay=false :interval="4000" type="card">
          <el-carousel-item>
          <div class="preview-thunmbail thumbnail0"></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="preview-thunmbail thumbnail1"></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="preview-thunmbail thumbnail2"></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="preview-thunmbail thumbnail3"></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="preview-thunmbail thumbnail4"></div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-row>
    <el-row class='nameinput'>
    <carousel ref ="sendercarousel" sis="From"></carousel>
      </el-col>
    </el-row>
    <el-row :gutter="20">
     <el-col :span="12"><div style="max-width:150px;" class="center">
    <div class="previewbutton" v-on:click="previewclick" style="width:100%"></div>
    </div></el-col>
     <el-col :span="12"><div style="max-width:150px;" class="center">
    <div class="sharebutton" v-on:click="shareclick" style="width:100%"></div>
    </div></el-col>
    
    </el-row>
  </el-main>
      
    
    </el-container>
  </div>
</body>
  <script src="/js/app.js?v={{ env('js_version_number') }}"></script>
</html>