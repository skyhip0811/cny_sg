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
<body class="v-center">
  <div class="toplogo"></div>
  <div id="app" class="">
    <el-container>
    <el-main>
    <el-row>
      <div class="text2020start1" style=""class ="center"></div>
    </el-row>
    <el-row>
      <div class="text2020start2" style=""class ="center"></div>
    </el-row>
    <el-row>
      <div class="endingmouse" style=""class ="center"></div>

    </el-row>
    

  <el-row >
     <el-col :span="24"><div  class="center">
    <div class="startbutton" v-on:click="moreclick" style="width:100%"></div>
    </div></el-col>
    
    </el-row>

  </el-main>
      
    
    </el-container>
  </div>
</body>
  <script src="/js/app.js?v={{ env('js_version_number') }}"></script>
</html>