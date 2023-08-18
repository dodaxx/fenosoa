<script setup>
const props = defineProps({
  classContent: {
    type: String
  }
})
</script>
<template>
  <div :class="`app-grid ${classContent}`">
    <slot />
  </div>
</template>
<style scoped lang="scss">
.app-grid {
  /* @apply grid grid-cols-2 gap-4; */

  @screen 2xl {
    @apply grid grid-cols-12 gap-5;
    padding: 0 16px;
  }
}
</style>