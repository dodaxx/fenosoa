<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


onMounted(() => {
  const tl = gsap.timeline();
  const body = document.querySelector('body');
  tl.from('.hero-img', {
    opacity: 0,
    delay: 1,
    duration: 1,
  }).from('.hero-title h1', {
    y: -300,
    duration: 0.9,
    ease: 'power4.out',
    delay: 0.5
  }).from('.hero-title h1 .text .content', {
    opacity: 0,
    stagger: {
      amount: 1
    },
  })

  gsap.to('.hero-title', {
    y: -300,
    scrollTrigger: {
      trigger: '.hero',
      start: '5% top',
      end: '25% top',
      scrub: 1
    }
  })


})


</script>
<template>
  <CommonAppGrid class-content="hero">
    <div class="hero-wrapper">
      <img src="@/assets/images/Hero/hero-image.png" alt="" class="hero-img">
      <div class="hero-title">
        <h1>
          <span class="text">
            <span v-for="i in `EVERYTHING\nYOU\nCAN`" class="content"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
            <span class="border-1 border-radius"></span>
            <span class="border-4 border-radius"></span>
          </span><br>
          <span class="text">
            <span v-for="i in `IMAGINE\nIS\nREAL`" class="content"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
            <span class="border-2 border-radius"></span>
            <span class="border-3 border-radius"></span>
          </span>
        </h1>
      </div>
    </div>
  </CommonAppGrid>
</template>
<style lang="scss" scoped>
.hero {
  background-color: #FF5835;

  &-wrapper {
    @apply col-span-10 col-start-2 relative pt-28;
    height: 100vh;

    img {
      position: absolute;
      top: 125px;
      object-fit: cover;
      height: 75%;
      width: 100%;
      border-radius: 8px;
    }
  }

  &-title {
    @apply relative pb-4;
    overflow: hidden;

    h1 {
      @apply text-center;
      font-size: 165px;
      font-family: 'gb';
      line-height: 150px;

      .text {
        position: relative;
        background-color: #FF5835;
        padding: 0 32px;
        border-radius: 16px;

        .border {
          &-1 {
            left: -2.4%;
            top: 15%;
            position: absolute;
            width: 25px;
            height: 25px;
            background-color: rgba(255, 255, 255, 0);
            border-radius: 50%;
            box-shadow: -10px -10px 0 #FF5835;
            transform: rotate(90deg);
            z-index: 1000;
          }

          &-2 {
            left: -3%;
            top: 15%;
            position: absolute;
            width: 25px;
            height: 25px;
            background-color: rgba(255, 255, 255, 0);
            border-radius: 50%;
            box-shadow: -10px -10px 0 #FF5835;
            transform: rotate(90deg);
            z-index: 1000;
          }

          &-3 {
            right: -3%;
            top: 15%;
            position: absolute;
            width: 25px;
            height: 25px;
            background-color: rgba(255, 255, 255, 0);
            border-radius: 50%;
            box-shadow: -10px -10px 0 #FF5835;
            transform: rotate(-5deg);
            z-index: 1000;
          }

          &-4 {
            right: -2.4%;
            top: 15%;
            position: absolute;
            width: 25px;
            height: 25px;
            background-color: rgba(255, 255, 255, 0);
            border-radius: 50%;
            box-shadow: -10px -10px 0 #FF5835;
            transform: rotate(-5deg);
            z-index: 1000;
          }
        }
      }
    }

  }

}
</style>