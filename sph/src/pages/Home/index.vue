<template>
  <div id="home">

    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend/>
    <Like></Like>
    <Rank/>
    <Floor/><Floor/>
    
    <Brand></Brand>
 
  </div>

</template>

<script>
import ListContainer from '@/pages/Home/ListContainer/index.vue'
import Recommend from '@/pages/Home/Recommend/index.vue'
import Rank from '@/pages/Home/Rank/Rank.vue'
import Like from '@/pages/Home/Like/Like.vue'
import Floor from '@/pages/Home/Floor/Floor.vue'
import Brand from '@/pages/Home/Brand/Brand.vue'

// import { mapState } from 'vuex';
export default {
 
  computed:{
      // ...mapState(["count","aa"])
  },
  components:{
    ListContainer,Recommend,Rank,Like,Floor,Brand
  }
}
</script>

<style scoped>

</style>