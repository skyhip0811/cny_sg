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


</head>
<body class="ot">
  <div class="toplogo"></div>
  <div id="app" class="wrapper">
    <el-container>
    <el-main>
    <el-row class="name_input" >

      <el-col :span ="8"><div id="totext"></div></el-col>
      <el-col :span ="16">
      <el-input id="input_receiver" v-model="receiver_input" placeholder="Receiver"></el-input>

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
    <el-col :span ="9"><div id="fromtext"></div></el-col>
      <el-col :span ="15">
    <el-input  id="input_receiver" v-model="sender_input" placeholder="Sender"></el-input>
      </el-col>
    </el-row>
    <el-row>
     <el-col :span="12"><div style="max-width:150px;" class="center">
    <div class="previewbutton" v-on:click="previewclick" style="width:100%"></div>
    </div></el-col>
     <el-col :span="12"><div style="max-width:150px;" class="center">
    <el-button  v-on:click="shareclick" style="width:100%">Share</el-button>
    </div></el-col>
    
    </el-row>
  </el-main>
      
    
    </el-container>
  </div>
</body>
  <script src="/js/app.js?v={{ env('js_version_number') }}"></script>
</html>