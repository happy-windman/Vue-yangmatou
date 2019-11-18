<template>
         <a
          class="item"
          href="https://m.ymatou.com/evt2/n5064?ProductId=0324a0bc-4f34-4f17-bb2a-388f4efe3e97&amp;TabType=0&amp;TabId=98aebfbf-bdce-434b-8b87-77fa7e1935c4_23d34f760ed1d76dc4d6cb6c0ab485f8"
          module_index
          module_name="time-limitedbuy"
          onclick
          bannerid="1"
        >
          <div
            class="pic"
            :style="{'backgroundImage':'url(' + item.BannerUrl + ')'}"
          ></div>
          <div class="xsq-countdown">
            仅剩
            <i class="xsq-countdown-time">01:52:41</i>
          </div>
        </a>
 
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props:['item'],
       
    })
</script>

<style scoped>

</style>