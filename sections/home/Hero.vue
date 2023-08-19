<script setup>
import { gsap } from 'gsap';

onMounted(() => {
  const everything = document.querySelector('.everything-you');
  const everythingContent = document.querySelectorAll('.everything-you> span');
  const imagine = document.querySelectorAll('.imagine> span');
  const real = document.querySelectorAll('.real> span');
  const imgHero = document.querySelector('.image-hero');
  const designer = document.querySelector('.designer > p');
  const front = document.querySelector('.front');

  const tl = gsap.timeline();


  tl.fromTo([everythingContent, imagine, real], {
    y: 100,
    opacity: 0,
    filter: 'blur(4px)'
  },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      delay: 3,
      filter: 'blur(0px)',
      // skewY: 7,
      stagger: {
        amount: 0.3
      },
      onComplete: () => {
        everything.style.overflow = 'visible';
      }
    },
  );

  tl.fromTo(imgHero, {
    opacity: 0,
    filter: 'blur(4px)'

  }, {
    opacity: 1,
    duration: 1,
    ease: "power4.out",
    delay: 0.5,
    filter: 'blur(0px)'

  });

  tl.fromTo(designer, {
    opacity: 0,
    y: 100,
    filter: 'blur(4px)',

  }, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power4.out",
    delay: 0.1,
    filter: 'blur(0px)',

  });
  tl.fromTo(front, {
    opacity: 0,
    filter: 'blur(4px)'

  }, {
    opacity: 1,
    duration: 1,
    ease: "power4.out",
    delay: 0.1,
    filter: 'blur(0px)',

  });

});



</script>
<template>
  <CommonAppGrid class-content="hero">
    <div class="content">
      <h1>
        <span class="everything-you">
          <span v-for="i in 'EVERYTHING'" class="everything-content">{{ i }}</span>
          <span v-for="i in ' you'" class="italic">{{ i }}</span><br>
        </span>
        <span class="imagine">
          <span v-for="i in 'CAN IMAGINE'" class="imagine-content">{{ i }}</span><br>
        </span>
        <span class="real">
          <span v-for="i in 'IS REAL.'" class="real-content">{{ i }}</span>
        </span>
      </h1>
      <div class="bt">
        <div class="front">
          <span v-for="i in 'FRONT-END DEVELOPER'">{{ i }}</span>
        </div>
        <img src="@/assets/images/Hero/hero-png-2.png" alt="" class="image-hero">
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
  background-color: #FF5835;
  height: 110vh;
  font-family: 'wp';

}

.content {
  @apply col-start-2 col-span-10 relative;
  padding-top: 125px;

  h1 {
    transform: translateX(-3px);
    font-size: 6.3vw;
    font-family: 'wp';
    line-height: 5.5vw;


    span {
      &.everything-you {
        padding-bottom: 10px;
      }

      &.everything-you,
      &.imagine,
      &.real {
        @apply items-end;
        display: flex;
        overflow: hidden;
        gap: 2px;
      }


      &.italic {
        @apply translate-x-2;
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
      overflow: hidden;
    }

    .designer {
      @apply absolute z-10;
      transform: rotate(90deg);
      left: -10.5%;
      bottom: 10%;
      overflow: hidden;

      p {
        font-size: 2.3vw;
        color: #FF5835;
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