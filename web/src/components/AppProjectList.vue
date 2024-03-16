<script>
import { isDark } from './basic/AppDarkToggle.vue'
import Card from './basic/AppCards.vue'

export default {
  components: {
    Card
  },
  data(){
    return {
      isDark,
      posts: [
        { key: 1, title: 'My journey with Vue', text: 'test1' },
        { key: 2, title: 'Blogging with Vue', text: 'test2' },
        { key: 3, title: 'Why Vue is so fun', text: 'test3' }
    ]}
    }
}
</script>
<template>
  <div class="p-4" :class="isDark?'bg-dark':'bg-light'">
      <b-card-group deck>
        <Card v-for="post in posts"
              :key="post.key"
              :text="post.text"
              :title="post.title"/>
      </b-card-group>
  </div>
</template>
