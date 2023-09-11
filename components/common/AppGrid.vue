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

  @apply grid grid-cols-4 gap-2;
  padding: 0 4px;

  @screen md {
    @apply grid-cols-8;
  }

  @screen lg {
    @apply grid-cols-12 gap-3;
    padding: 0 16px;
  }



  @screen 2xl {
    @apply gap-5;
  }
}
</style>