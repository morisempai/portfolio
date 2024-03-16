<template>
  <div>
        <lottie-vue-player
            src="./rocket.json"
            :player-controls="false"
            :loop="true"
            :autoplay="true"
            :showColorPicker="false"
            style="width: 100%; height: 400px;"
            :style="isDark?'background: rgb(74, 80, 85)':'background: rgb(242, 244, 245)'"
        ></lottie-vue-player>
  </div>
</template>

<script>

import {isDark} from "@/components/basic/AppDarkToggle.vue";

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      isDark
    }
  }
}
</script>

<style>
.light{
  background: rgb(242, 244, 245)
}
.dark{
  background: rgba(52, 58, 64, 0.89)
}
</style>