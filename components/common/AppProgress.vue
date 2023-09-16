<script setup></script>
<template>
  <div class="progress">
    <p>
      Website in progress 50%
    </p>
  </div>
</template>
<style scoped lang="scss">
.progress {
  @apply fixed flex items-center justify-center;
  font-family: 'gb';
  padding: 6px 10px;
  animation: bounce 1s infinite;
  z-index: 1200;
  width: 100%;

  p {
    background-color: black;
    font-size: 24px;
    color: white;
    padding: 6px 10px;
    border-radius: 8px;

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