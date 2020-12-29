<template>
  <v-container>
    <!-- メニュー -->
    <v-navigation-drawer app v-model="drawer">
      <v-list nav dense>
        <v-list-item-group>
          <!-- ホーム -->
          <v-list-item @click="onHome">
            <!-- アイコン -->
            <v-list-item-avatar left> <v-icon>mdi-home</v-icon> </v-list-item-avatar>
            <!-- テキスト -->
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- ヘッダー -->
    <v-app-bar app>
      
      <!-- ハンバーガーメニュー -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- タイトル -->
      <v-toolbar-title>
        大塚ブログ
      </v-toolbar-title> 

    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  data: () => ({
    drawer: false,
  }),
  methods:{
    onHome() {
      if(this.$route.path != '/'){
        this.$router.push({ path: '/' });
      }
    }, 
  }

};
</script>