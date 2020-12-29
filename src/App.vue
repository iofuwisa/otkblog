<template>
  <v-app>
    <div :class="AppStyle">
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
  data () {
    return {
      AppStyle: 'app'
    }
  },
  created: () => (document.documentElement.setAttribute('lang', 'ja')),
};
</script>

<style scoped>
.app {
  background-color: #eeeeee;
}

</style>