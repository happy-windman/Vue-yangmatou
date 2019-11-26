<template>
  <div id="root">
    <myHeader path="community"></myHeader>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script >
  import Vue from "vue";
import myHeader from "components/header";


export default Vue.extend({
  components: {
    myHeader,
  }
});
</script>

<style scoped lang="stylus">
#root
  height 100%
  display flex
  flex-direction column


</style>