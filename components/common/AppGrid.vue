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
  @screen xl {
    @apply grid grid-cols-12 gap-3;
    padding: 0 16px;
  }

  @screen 2xl {
    @apply gap-5;
  }
}
</style>