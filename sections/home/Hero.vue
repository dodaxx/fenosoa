<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const hero = document.querySelector('.hero');
  const everything = document.querySelector('.everything-you');
  const everythingContent = document.querySelectorAll('.everything-you> span');
  const imagine = document.querySelectorAll('.imagine');
  const imagineContent = document.querySelectorAll('.imagine> span');
  const real = document.querySelectorAll('.real');
  const realContent = document.querySelectorAll('.real> span');
  const imgHero = document.querySelector('.image-hero');
  const designer = document.querySelector('.designer');
  const designerContent = document.querySelector('.designer > p');
  const front = document.querySelector('.front');
  const svg = document.querySelector('.scroll-down>svg');
  const overlay = document.querySelector('.bt>.overlay');
  const tl = gsap.timeline();

  tl.fromTo([everythingContent, imagineContent, realContent], {
    y: 100,
    filter: 'blur(4px)'
  },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      delay: 3,
      filter: 'blur(0px)',
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
  }, {
    opacity: 1,
    duration: 2,
    ease: "power4.out",
    delay: 0.1,

  }).fromTo(designerContent, {
    opacity: 0,
    y: 50,
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

  }, {
    opacity: 1,
    duration: 1,
    ease: "power4.out",
    delay: 0.1,

  });

  gsap.to([front, everything, imagine, real, designer], {
    y: -150,
    filter: 'blur(10px)',
    scrollTrigger: {
      trigger: hero,
      ease: "Back.easOut",
      start: "5% top",
      end: "100% top",
      scrub: 1,
    },
  });
  gsap.to(imgHero, {
    y: -100,
    filter: 'blur(10px)',
    scrollTrigger: {
      trigger: hero,
      start: "5% top",
      end: "100% top",
      scrub: 2,
    },
  });
  gsap.to(overlay, {
    opacity: 0,
    scrollTrigger: {
      trigger: hero,
      start: "5% top",
      end: "100% top",
      scrub: true,
    },
  });
  gsap.to(svg, {
    y: -50,
    scrollTrigger: {
      trigger: hero,
      start: "5% top",
      end: "100% top",
      scrub: 2,
    },
  });
});


</script>
<template>
  <CommonAppGrid class-content="hero">
    <div class="content">
      <h1>
        <span class="everything-you">
          <span v-for="i in 'EVERYTHING\n'" class="everything-you-content">{{ i.replace(/\n/gm, '&nbsp') }}</span>
          <span v-for="i in 'you'" class="italic everything-you-content">{{ i }}</span><br>
        </span>
        <span class="imagine">
          <span v-for="i in 'CAN\n IMAGINE'" class="imagine-content">{{ i.replace(/\n/gm, '&nbsp') }}</span><br>
        </span>
        <span class="real">
          <span v-for="i in 'IS\n REAL.'" class="real-content">{{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
      </h1>
      <div class="bt">
        <div class="front">
          <span v-for="i in 'FRONT-END\n DEVELOPER'">{{ i.replace(/\n/gm, '&nbsp') }}</span>
        </div>
        <div class="overlay"></div>
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
  /* background-color: #ffffff; */
  height: 110vh;
  font-family: 'wp';
  display: relative;
}

.content {
  @apply col-start-2 col-span-10 relative;
  padding-top: 125px;

  h1 {
    @apply relative z-10;
    transform: translateX(-3px);
    font-size: 6.3vw;
    font-family: 'wp';
    line-height: 5.5vw;



    .everything-you,
    .imagine,
    .real {
      @apply items-end;
      display: flex;
      overflow: hidden;
      gap: 2px;


      &-content {
        opacity: 0;
      }
    }

    .everything-you {
      padding-bottom: 10px;
    }


    .italic {
      @apply relative -left-4;
      font-family: 'sd';
      line-height: 4.7vw;
    }
  }

  .bt {
    @apply absolute;
    top: 130px;

    .overlay {
      z-index: 1;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #ff57351c;
    }

    img {
      opacity: 0;
    }

    .front {
      @apply absolute;
      z-index: 0;
      font-size: 2.3vw;
      bottom: 2px;
      right: -4%;
      opacity: 0;
    }

    .designer {
      @apply absolute z-10;
      transform: rotate(90deg);
      left: -10.5%;
      bottom: 10%;
      overflow: hidden;

      p {
        opacity: 0;
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