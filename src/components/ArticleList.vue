<template>
<v-container>
    <div :class="ArticleDivStyle" v-for="(article, key) in articles" :key="key" ref="ArticleRef">
      <img :class="ArticleImgStyle" v-bind:src="article.thumb" ref="ArticleImgRef"/>
      <div :style="{height: titleHeight}" :class="ArticleTitleStyle">
        <v-card-title>{{article.title}}</v-card-title>
        <v-card-subtitle>{{article.date}}</v-card-subtitle>
        <v-divider class="mx-3"></v-divider>
        <v-card-text>{{article.text}}</v-card-text>
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
          text: "Vue.jsでブログを作成します。（このブログのこと）作成したブログはAWSでデプロイします。ソースはgithubで管理し公開します。",
          clipedtext: "",
        },
        {
          title: "Vue.jsで個人ブログを作る",
          thumb: require('@/assets/thumbnail/095614.png'),
          date: "2020/12/20",
          text: "Vue.jsでブログを作成します。（このブログのこと）作成したブログはAWSでデプロイします。ソースはgithubで管理し公開します。",
          clipedtext: "",
        },
    ],
    ArticleDivStyle: 'articleDiv',
    ArticleImgStyle: 'articleImg',
    ArticleTitleStyle: 'articleTitle',
    titleHeight: "",
  }),
  methods: {
    handleResize: function() {
      if(window.innerWidth >= 900)
      {
        // なぜか初回時のみHeightが0になるため、widthから算出(アスペクト比は16：9固定)
        this.titleHeight=this.$refs.ArticleImgRef[0].clientWidth *9/16  + "px";
      }else{
        this.titleHeight="auto"
      }
    },
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
    this.$nextTick().then(() => {
      this.handleResize()
    })
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }
};
</script>

<style scoped>

.articleDiv{
  margin-top: 20px;
  border-radius: 10px;
  background-color: white;
}
@media screen and (min-width:300px) {
  .articleImg{
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
  .articleTitle{
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
    height: 100%;
    width: 60%;
    float: right;
    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
}


</style>