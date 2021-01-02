<!--
タイトル：ルートページ
概要：ヘッダー・フッターとルーティングによって指定されたビューを表示
-->
<template>
  <v-app>
    <div class="app">

      <Header />

      <!-- コンテンツ(ルーターで表示対象を制御) -->
      <v-content>
        <router-view />
      </v-content>

      <Footer />

    </div>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.app {
  background-color: #eeeeee;
}
</style>