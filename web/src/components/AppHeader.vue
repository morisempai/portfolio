<script>
import Dark from './basic/AppDarkToggle.vue'
import { isDark } from './basic/AppDarkToggle.vue'

export default {
  components: {
    Dark
  },
  data(){
    return {
      isDark
    }
  }
}
</script>

<template>
    <div>
      <b-navbar toggleable="lg"
                :variant="isDark?'dark':'light'"
                :type="isDark?'dark':'light'">
        <b-navbar-brand href="#">Portfolio</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-text><Dark/></b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>