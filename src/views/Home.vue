<template>
<v-container>
  <div :class="IntroducingStyle">
    <Introducing />
  </div>
  <div :class="ArticleListStyle">
    <ArticleList />
  </div>
</v-container>
</template>

<script>
import ArticleList from '../components/ArticleList.vue';
import Introducing from '../components/Introducing.vue';
export default {
  name: 'Home',
  components: {
    ArticleList,
    Introducing,
  },
  data () {
    return {
      ArticleListStyle: 'articleList',
      IntroducingStyle: 'introducing',
    }
  }
}
</script>

<style scoped>
@media screen and (min-width:480) {
  .articleList {
    width: 100%;
  }
  .introducing{
    width: 100%;
  }
}
@media screen and (min-width:900px) {
  .articleList {
    width: 75%;
    float: left;
  }
  .introducing{
    width: 25%;
    float: right;
  }
}
</style>