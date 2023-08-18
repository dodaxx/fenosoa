<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  tag: {
    type: String
  },
  classText: {
    type: String
  }
})
</script>
<template>
  <component :is="tag" :class="classText">
    <span v-for="t in text">{{ t }}</span>
  </component>
</template>
