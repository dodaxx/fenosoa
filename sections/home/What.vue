<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const sectionWhat = document.getElementsByClassName('what-section');
  const hero = document.querySelector('.hero');
  const designerContent = document.querySelector('.designer > p');

  gsap.to([hero, sectionWhat], {
    backgroundColor: '#F9DCC5',
    scrollTrigger: {
      trigger: sectionWhat,
      start: "top 45%",
      end: "top 45%",
      scrub: 2,
    },
  })
  gsap.to(designerContent, {
    color: '#F9DCC5',
    scrollTrigger: {
      trigger: sectionWhat,
      start: "top 45%",
      end: "top 45%",
      scrub: 2,
    },
  })
})
</script>
<template>
  <CommonAppGrid class-content="what-section">
    <div class="lft">
      <div class="title">
        <h3>
          <span v-for="i in `You Don't Lose Anything Today ...`">{{ i }}</span>
        </h3>
      </div>
      <div class="image">
        <img src="@/assets/images/what/what-img.png" alt="">
      </div>
    </div>
    <div class="rgt">
      <h3>
        <span v-for="i in 'WHAT'" class="what">{{ i }}</span> <br>
        <span v-for="i in 'you'" class="you">{{ i }}</span>
        <span v-for="i in ' NEED?'" class="need">{{ i }}</span>
      </h3>
    </div>
  </CommonAppGrid>
</template>
<style scoped lang="scss">
.what-section {
  background-color: #FF5835;
  padding-top: 75px;
  height: 115vh;
  padding-bottom: 53px;
}

.lft {
  @apply col-start-2 col-span-4;

  .title {
    font-size: 55px;
    font-family: 'ns';
    line-height: 60px;

    h3 {
      @apply flex;

      span {
        @apply block;
      }
    }
  }

  .image {
    margin-top: 37px;

    img {
      border-radius: 50px;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
}

.rgt {
  @apply col-span-7 flex items-center mt-32;
  font-family: 'wp';
  line-height: 75px;
  color: #FF5835;

  .what {
    @apply relative -left-40;
    font-size: 250px;
    background-color: transparent;

  }

  .you {
    font-size: 125px;
    font-family: 'sd';
  }

  .need {
    font-size: 125px;
    font-family: 'wp';
  }
}
</style>