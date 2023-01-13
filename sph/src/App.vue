<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'

import { mapState } from 'vuex';
export default{
  components:{
    Header,
    Footer  
  },
  computed:{
      ...mapState['count']
  }
}
</script>

<template>
  <div>
    <Header></Header>  
    <router-view></router-view>
    <Footer v-show="$route.meta.show!==false"></Footer>
  </div>
</template>

<style scoped>

</style>
