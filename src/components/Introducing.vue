<template>
<v-container>
  <div class="introducing">
    <v-divider vertical></v-divider>
    <div class="profileImgWrapper">
      <img class="profileImg" :src="profileImg"/>
    </div>
    <v-card-title>大塚</v-card-title>
    <v-card-subtitle>仕事は主に車載の組み込み開発(android c/c++)をしています。趣味でweb作ったりしてます。
    </v-card-subtitle>
    <!-- SNSリンク -->
    <v-card-title>
      <v-btn fab small class="mx-2" color="white" href="https://github.com/iofuwisa" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-card-title>
  </div>
</v-container>
</template>

<script>
export default {
  name: 'Introducing',
  components: {
  },
  data: () => ({
    profileImg: require('@/assets/profileImg.png'),
  }),
};
</script>

<style scoped>
.profileImgWrapper{
    width: 100%;
    text-align: center;
}
.profileImg{
    width: 80%;
    border-radius: 50%;
}
.introducing{
    margin-top: 20px;
    border-radius: 15px 15px 15px 15px;
    background-color: white;
}

</style>