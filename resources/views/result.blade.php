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
<body class="v-center">
  <div class="toplogo"></div>
  <div id="app" class="">
    <el-container>
    <el-main>
    <el-row>To: {{ app('request')->input('to') }}</el-row>
    <el-row>
      <div style=""class ="center">
        <video loop  muted autoplay src ="assets/{{ app('request')->input('video') }}.mp4"></video>
      </div>
    </el-row>
    <el-row style="text-align:right;">From: {{ app('request')->input('from') }}</el-row>
    <el-row><div style="width:150px;" class="center">
    <el-button  v-on:click="fbclick" style="width:100%">Facebook</el-button>
  </div></el-row>
  </el-main>
      
    
    </el-container>
  </div>
</body>
  <script src="/js/app.js?v={{ env('js_version_number') }}"></script>
</html>