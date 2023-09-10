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

  @apply grid-cols-2 gap-2;
  padding: 0 8px;

  @screen md {
    @apply grid-cols-8;
  }

  @screen xl {
    @apply grid-cols-12 gap-3;
    padding: 0 16px;
  }

  @screen 2xl {
    @apply gap-5;
  }
}
</style>