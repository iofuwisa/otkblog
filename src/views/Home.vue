<!--
タイトル：ホームビュー
概要：記事一覧コンポーネントと自己紹介コンポーネントを表示
-->

<template>
<v-container>
  <div class="home">
    <!-- 自己紹介コンポーネント -->
    <div class="introducing">
      <Introducing />
    </div>
    <!-- 記事一覧コンポーネント -->
    <div class="articleList">
      <ArticleList />
    </div>
    <div style="clear: both;" />
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
}
</script>

<style scoped>
.home {
  max-width:1080px;
  margin-left: auto;
  margin-right: auto;
}
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
</style>