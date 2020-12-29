<template>
<v-container>
    <div :class="IntroducingStyle">
        <v-divider vertical></v-divider>
        <div :class="profileImgWrapperStyle"><img :class="profileImgStyle" v-bind:src="profileImg"/></div>
        <v-card-title>大塚</v-card-title>
        <v-card-subtitle>仕事は主に車載の組み込み開発(android c/c++)をしています。趣味でweb作ったりしてます。基本的に飽き性なので
            広く浅くって感じでやってます。
        </v-card-subtitle>
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
    profileImgWrapperStyle:'profileImgWrapper',
    profileImgStyle: 'profileImg',
    IntroducingStyle: 'introducing',
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