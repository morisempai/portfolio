<script>
import { isDark } from './AppDarkToggle.vue'


export default {
  props: {
    title: String,
    text: String
  },
  data(){
    return {
      isDark
    }
  }
}
</script>

<template>
  <b-card
      :bg-variant="isDark?'dark':'light'"
      :text-variant="isDark?'light':'dark'"
      :header="title"
      align="center"
  >
    <b-card-text>{{ text }}</b-card-text>
  </b-card>
</template>