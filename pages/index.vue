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
      <div class="bt">
        <div class="front">
          <span v-for="i in 'FRONT-END DEVELOPER'">{{ i }}</span>
        </div>
        <img src="@/assets/images/Hero/hero-img.png" alt="">
        <div class="designer">
          <p>WEB DESIGNER</p>
        </div>
      </div>
      <div class="scroll-down">
        <IconsArrowDownIcon />
        <div class="eclipse"></div>
      </div>
    </div>
  </CommonAppGrid>
</template>
<style scoped lang="scss">
.hero {
  background-color: #FF846A;
  height: 110vh;
  font-family: 'wp';
}

.content {
  @apply col-start-2 col-span-10 relative;
  padding-top: 125px;

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

  .bt {
    @apply absolute;
    top: 130px;


    .front {
      @apply absolute;
      font-size: 2.3vw;
      bottom: 2px;
      right: -4%;

    }

    .designer {
      @apply absolute z-10;
      transform: rotate(90deg);
      left: -10.5%;
      bottom: 10%;

      p {
        font-size: 2.3vw;
        color: #FF846A;
        -webkit-text-stroke: 1px black;
      }
    }
  }

  .scroll-down {
    @apply absolute flex flex-col justify-center items-center;
    bottom: 6%;
    left: 50%;
    transform: translateX(-50%);

    .eclipse {
      width: 16px;
      height: 16px;
      background-color: black;
      border-radius: 2rem;
    }
  }
}
</style>