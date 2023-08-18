<script setup></script>
<template>
  <CommonAppGrid class-content="hero">
    <div class="content">
      <h1>
        <span v-for="i in 'EVERYTHING'">{{ i }}</span>
        <span v-for="i in ' you'" class="italic">{{ i }}</span><br>
        <span v-for="i in 'CAN IMAGINE'">{{ i }}</span><br>
        <span v-for="i in 'IS REAL.'">{{ i }}</span>
      </h1>
      <img src="@/assets/images/Hero/hero-img.png" alt="">
    </div>
  </CommonAppGrid>
</template>
<style scoped lang="scss">
.hero {
  background-color: #FF846A;
  height: 100vh
}

.content {
  @apply col-start-2 col-span-10 relative;
  padding-top: 90px;

  h1 {
    transform: translateX(10px);
    font-size: 6.3vw;
    font-family: 'wp';
    line-height: 5.5vw;

    span {
      &.italic {
        font-family: 'sd';
        line-height: 4.7vw;

      }
    }
  }

  img {
    @apply absolute;
    top: 95px;
  }
}
</style>