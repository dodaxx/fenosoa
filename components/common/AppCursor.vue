<script setup>
import gsap from 'gsap';
import { useCursor } from '~/store/useCursor';

const store = useCursor();

const mouseX = ref(0);
const mouseY = ref(0);

onMounted(() => {
  gsap.to({}, {
    duration: 0.016,
    repeat: -1,
    onRepeat: function () {
      gsap.set('.cursor', {
        css: {
          left: mouseX.value,
          top: mouseY.value,
        }
      })
    }
  });
  const mouseMove = (e) => {
    mouseX.value = e.clientX;
    mouseY.value = e.clientY;
  }
  window.addEventListener('mousemove', mouseMove);

})
</script>
<template>
  <div :class="`cursor cursor--${store.formCursor}`"></div>
</template>
<style lang="scss" scoped>
.cursor {
  @apply fixed;
  margin-top: -45px;
  margin-left: -40px;
  width: 75px;
  height: 75px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50%;
  z-index: 1000;
  pointer-events: none;
  transition: 0.1s;

  &--full {
    margin-top: -25px;
    margin-left: -20px;
    background-color: rgb(255, 255, 255);
    width: 45px;
    height: 45px;
    transition: 0.2s;
    animation: bounce 1s infinite;
    mix-blend-mode: exclusion;
  }
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) scale(1, 1);
  }

  25% {
    transform: scale(0.9, 1.1);
  }

  40% {
    transform: translateY(-30px) scale(1.1, 0.9);
  }

  60% {
    transform: translateY(-15px) scale(0.95, 1.05);
    ;
  }
}
</style>