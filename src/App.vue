<template>
  <v-app>

    <Header />

    <div :class="AppStyle">

      <!-- コンテンツ(ルーターで表示対象を制御) -->
      <v-content>
        <router-view />
      </v-content>
    </div>
      
    <Footer />


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
  data () {
    return {
      AppStyle: 'app'
    }
  },
  // 言語を日本語に設定
  created: () => (document.documentElement.setAttribute('lang', 'ja')),
};
</script>

<style scoped>
.app {
  background-color: #eeeeee;
}

</style>