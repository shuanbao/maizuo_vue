<template>
  <div id="app">
      <Footer></Footer>
    
    <router-view/>
  </div>
</template>

<script>
    // import uri from "@/config/uri";
    import Footer from '@/components/Navigation/Footer'

    export default {
      //  created(){
      //    this.$http.get(uri.getcity)
      //    console.log(uri.getnowplaying);
       
      // }
      components:{
        Footer,
      }
    }
</script>

<style lang="scss">
  
</style>
