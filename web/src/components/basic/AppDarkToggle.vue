<template>
  <div>
    <b-form-checkbox
        switch size="lg"
        @input="toggleDark()"
        :checked="isDark"
    />
  </div>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";
export const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
});
const toggleDark = useToggle(isDark);
export default {
  data() {
    return {
      toggleDark,
      isDark
    }
  }
}
</script>

<style>
.dark {
  background: #16171d;
  color: #fff;
}
.light {
  background: #ffffff;
  color: #000000;
}
</style>