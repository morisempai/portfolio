
<script>
import { isDark } from "@/components/basic/AppDarkToggle.vue";

export default {
  data() {
    return {
      isDark
    }
  },
  mounted() {
    let credlyScript = document.createElement('script')
    credlyScript.setAttribute('src', '//cdn.credly.com/assets/utilities/embed.js')
    credlyScript.setAttribute('type','text/javascript')
    document.head.appendChild(credlyScript)
  },
}
</script>

<template>
<div :class="isDark?'bg-dark text-light':'bg-light text-dark'">
  <h3 class="p-4">AWS Certificates</h3>
  <b-card-group style="width: fit-content" class="p-4" deck>
    <b-card align="center" class='bg-light text-dark'>
      <div :class="isDark?'bg-dark text-light':'bg-light text-dark'"
          data-iframe-width="250"
          data-iframe-height="270"
          data-share-badge-id="4de50560-1123-4679-8ec1-38302da771c5"
          data-share-badge-host="https://www.credly.com">
      </div>
    </b-card>
  </b-card-group>
</div>
</template>