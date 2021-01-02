<template>
<v-container>
  <div class="article" v-for="(article, key) in articles" :key="key" ref="ArticleRef">
    <img class="articleImg" v-bind:src="article.thumb" ref="ArticleImgRef"/>
    <div class="articleTitle" :style="{height: titleHeight}">
      <v-card-title>{{article.title}}</v-card-title>
      <v-divider class="mx-3" />
      <v-card-subtitle>{{article.date}}</v-card-subtitle>
    </div>
    <div style="clear: both;" />
  </div>
</v-container>
</template>

<script>
export default {
  name: 'ArticleList',
  components: {
  },
  data: () => ({
    articles: [
      {
        title: "Vue.jsで個人ブログを作る",
        thumb: require('@/assets/thumbnail/095614.png'),
        date: "2020/12/20",
      },
      {
        title: "Vue.jsで個人ブログを作る",
        thumb: require('@/assets/thumbnail/095614.png'),
        date: "2020/12/20",
      },
    ],
    titleHeight: "",
  }),
  methods: {
    handleResize: function() {
      if(window.innerWidth >= 900)
      {
        // なぜか初回時のみHeightが0になるため、widthから算出(アスペクト比は16：9固定)
        this.titleHeight=this.$refs.ArticleImgRef[0].clientWidth *9/16-10  + "px";
      }else{
        this.titleHeight="auto"
      }
    },
  },
  mounted: function () {
    // ウィンドウのリサイズ時に実行
    window.addEventListener('resize', this.handleResize)

    // 初回描画完了後処理
    this.$nextTick().then(() => {
      this.handleResize()
    })
  },
  beforeDestroy: function () {
    // ウィンドウリサイズ時実行のリスナー削除
    window.removeEventListener('resize', this.handleResize)
  }
};
</script>

<style scoped>
.article{
  margin-top: 20px;
  border-radius: 10px;
  background-color: white;
}
@media screen and (min-width:300px) {
  .articleImg{
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
}
@media screen and (min-width:900px) {
  .articleImg{
    height: 100%;
    width: 40%;
    float: left;
    border-radius: 10px 0px 0px 10px;
  }
  .articleTitle{
    width: 60%;
    float: right;
  }
}
</style>