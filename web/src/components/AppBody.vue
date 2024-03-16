<script>
import { isDark} from "@/components/basic/AppDarkToggle.vue";
export default {
  data() {
    return {
      isDark
    }
  }
}
</script>

<template>
  <div :class="isDark?'bg-dark text-light':'bg-light text-dark'" class="container">
    <div class="row">
      <div class="col bd-content">
          <slot></slot>
        </div>
    </div>
  </div>
</template>