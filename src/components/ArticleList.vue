<template>
<v-container>
    <!-- <v-card class="my-5" v-for="(article, key) in articles" :key="key"> -->
    <div :class="ArticleDivStyle" v-for="(article, key) in articles" :key="key">
        <v-layout wrap>
        <v-flex>
            <img :class="ArticleImgStyle" v-bind:src="article.thumb" width="100%" />
        </v-flex>
        <v-flex>
            <v-card-title>{{article.title}}</v-card-title>
            <v-card-subtitle>{{article.date}}</v-card-subtitle>
        </v-flex>
        <v-flex>
            <v-divider class="mx-3"></v-divider>
            <v-card-text>{{article.text}}</v-card-text>
        </v-flex>

        </v-layout>
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
        },
        {
          title: "Vue.jsで個人ブログを作る",
          thumb: require('@/assets/thumbnail/095614.png'),
          date: "2020/12/20",
          text: "Vue.jsでブログを作成します。（このブログのこと）作成したブログはAWSでデプロイします。ソースはgithubで管理し公開します。",
        },
        {
          title: "Vue.jsで個人ブログを作る",
          thumb: require('@/assets/thumbnail/095614.png'),
          date: "2020/12/20",
          text: "Vue.jsでブログを作成します。（このブログのこと）作成したブログはAWSでデプロイします。ソースはgithubで管理し公開します。",
        },
        {
          title: "Vue.jsで個人ブログを作る",
          thumb: require('@/assets/thumbnail/095614.png'),
          date: "2020/12/20",
          text: "Vue.jsでブログを作成します。（このブログのこと）作成したブログはAWSでデプロイします。ソースはgithubで管理し公開します。",
        },
        {
          title: "Vue.jsで個人ブログを作る",
          thumb: require('@/assets/thumbnail/095614.png'),
          date: "2020/12/20",
          text: "Vue.jsでブログを作成します。（このブログのこと）作成したブログはAWSでデプロイします。ソースはgithubで管理し公開します。",
        },
        {
          title: "Vue.jsで個人ブログを作る",
          thumb: require('@/assets/thumbnail/095614.png'),
          date: "2020/12/20",
          text: "Vue.jsでブログを作成します。（このブログのこと）作成したブログはAWSでデプロイします。ソースはgithubで管理し公開します。",
        },
        {
          title: "Vue.jsで個人ブログを作る",
          thumb: require('@/assets/thumbnail/095614.png'),
          date: "2020/12/20",
          text: "Vue.jsでブログを作成します。（このブログのこと）作成したブログはAWSでデプロイします。ソースはgithubで管理し公開します。",
        },
        {
          title: "Vue.jsで個人ブログを作る",
          thumb: require('@/assets/thumbnail/095614.png'),
          date: "2020/12/20",
          text: "Vue.jsでブログを作成します。（このブログのこと）作成したブログはAWSでデプロイします。ソースはgithubで管理し公開します。",
        },
        {
          title: "Vue.jsで個人ブログを作る",
          thumb: require('@/assets/thumbnail/095614.png'),
          date: "2020/12/20",
          text: "Vue.jsでブログを作成します。（このブログのこと）作成したブログはAWSでデプロイします。ソースはgithubで管理し公開します。",
        },
        {
          title: "Vue.jsで個人ブログを作る",
          thumb: require('@/assets/thumbnail/095614.png'),
          date: "2020/12/20",
          text: "Vue.jsでブログを作成します。（このブログのこと）作成したブログはAWSでデプロイします。ソースはgithubで管理し公開します。",
        },
    ],
    ArticleDivStyle: 'articleDiv',
    ArticleImgStyle: 'articleImg'
  }),
};
</script>

<style scoped>

.articleDiv{
    margin-top: 20px;
    border-radius: 10px;
    background-color: white;
}
.articleImg{
    border-radius: 10px 10px 0px 0px;
}

</style>