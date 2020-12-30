<template>
<v-container>
  <div :class="HomeStyle">
    <div :class="IntroducingStyle">
      <Introducing />
    </div>
    <div :class="ArticleListStyle">
      <ArticleList />
    </div>
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
      HomeStyle: 'home',
    }
  }
}
</script>

<style scoped>
@media screen and (min-width:300px) {
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
.home {
  max-width:1080px;
  margin-left: auto;
  margin-right: auto;
}
</style>