<script setup>

</script>
<template>
  <nav>
    <div class="logo">
      <div class="wrapper">
        <span v-for="t in 'DOD'">{{ t }}</span>
        <span class="reverse">A</span>
        <span v-for="t in 'XX'">{{ t }}</span>
      </div>
    </div>
    <div class="menu">
      <span v-for="t in 'More'">{{ t }}</span>
    </div>
  </nav>
</template>
<style scoped lang="scss">
nav {
  @apply flex justify-between items-center pl-4 pr-4 fixed;
  font-family: 'wp';
  width: 100%;
  padding: 30px 32px 0 32px;
}



.wrapper {
  @apply flex justify-center items-center;
  font-size: 30px;

  .reverse {
    @apply relative;
    top: -3px;
    transform: rotate(180deg);

  }
}

.menu {
  /* @apply col-start-12; */
  font-size: 25px;
}
</style>