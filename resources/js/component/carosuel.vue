<template>
  <div class="row">
    <div class="col-sm mt-3 mt-sm-0">
      <carousel ref = "nestedcarousel" :interval=99999999  v-bind:autoplay="false" :data="data" indicator-type="disc"></carousel>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      autoplay: false,
      sis:null,
      type: null,
      interval:999999999,
    },
    methods:{
      getIndex(){
        return this.$refs.nestedcarousel.index;
      }
    },
    data() {
      return {

        data: [
          '<div class="name"><span class="totext">'+this.sis+': </span>Boss</div>',
          '<div class="name"><span class="totext">'+this.sis+': </span>Me</div>',
          '<div class="name"><span class="totext">'+this.sis+': </span>Mum</div>',
          '<div class="name"><span class="totext">'+this.sis+': </span>Sunshine</div>',
          '<div class="name"><span class="totext">'+this.sis+': </span>Squad</div>',
          '<div class="name"><span class="totext">'+this.sis+': </span>Hubby</div>',
          '<div class="name"><span class="totext">'+this.sis+': </span>You</div>',
          '<div class="name"><span class="totext">'+this.sis+': </span>Dad</div>',
          '<div class="name"><span class="totext">'+this.sis+': </span>Uncle</div>',
          '<div class="name"><span class="totext">'+this.sis+': </span>Auntie</div>',
          '<div class="name"><span class="totext">'+this.sis+': </span>Sweetie</div>',
          '<div class="name"><span class="totext">'+this.sis+': </span>Wifey</div>',
        ],
      };
    },
  };
</script>

<style>

</style>