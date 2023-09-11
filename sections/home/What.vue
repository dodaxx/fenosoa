<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const sectionWhat = document.getElementsByClassName('what-section');
  const hero = document.querySelector('.hero');
  const heroTitle = document.querySelectorAll('.hero-title h1 .text');
  const loseContent = document.querySelectorAll('.lose > span');
  const todayContent = document.querySelectorAll('.today > span');
  const image = document.querySelectorAll('.lft > .image');
  const whatContent = document.querySelectorAll('.rgt  > h3 > .what > span');
  const youContent = document.querySelectorAll('.rgt > h3 > .you > span');
  const tl = gsap.timeline();

  gsap.to([hero, sectionWhat, heroTitle], {
    backgroundColor: '#F9DCC5',
    scrollTrigger: {
      trigger: sectionWhat,
      start: "top 45%",
      end: "top 45%",
      scrub: 1,
    },
  });
  tl.fromTo([loseContent, todayContent], {
    y: 100,
    filter: 'blur(4px)'
  },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      delay: 1,
      filter: 'blur(0px)',
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: sectionWhat,
        start: "top 45%",
        end: "top 30%",
        scrub: 2.2,
      },
    },
  );
  tl.fromTo(image, {
    y: 100,
    filter: 'blur(4px)'
  },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      delay: 1,
      filter: 'blur(0px)',
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: sectionWhat,
        start: "top 25%",
        end: "top 5%",
        scrub: 2.2,
      },
    },
  );
  tl.fromTo([whatContent, youContent], {
    y: 500,
    filter: 'blur(4px)'
  },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      delay: 1,
      filter: 'blur(0px)',
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: sectionWhat,
        start: "top 10%",
        end: "top -15%",
        scrub: 2.4,
      },
    },
  );
})

</script>
<template>
  <CommonAppGrid class-content="what-section">
    <div class="lft">
      <div class="title">
        <h3>
          <span class="lose">
            <span v-for="i in `You\n Don't\n Lose `">{{ i.replace(/\n/gm, '&nbsp') }}</span>
          </span>
          <span class="today">
            <span v-for="i in ` Anything\n Today...`">{{ i.replace(/\n/gm, '&nbsp') }}</span>
          </span>
        </h3>
      </div>
      <div class="image">
        <img src="@/assets/images/what/what-img.png" alt="">
      </div>
    </div>
    <div class="rgt">
      <h3>
        <span class="what">
          <span v-for="i in 'WHAT'">{{ i }}</span> <br>
        </span>
        <span class="you">
          <span v-for="i in 'you\n'" class="italic">{{ i.replace(/\n/gm, '&nbsp') }}</span>
          <span v-for="i in ' NEED?'">{{ i }}</span>
        </span>
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
  @apply col-span-4;

  @screen md {
    @apply col-span-8;
  }

  @screen xl {
    @apply col-start-2 col-span-4;
  }

  .title {
    font-family: 'ns';
    font-size: 30px;
    line-height: 30px;

    @screen md {
      font-size: 40px;
      line-height: 45px;
    }

    @screen xl {
      font-size: 55px;
      line-height: 60px;
    }

    h3 {

      .lose,
      .today {
        @apply flex;
        overflow: hidden;
        width: 100%;


        span {
          @apply block;
        }
      }

    }
  }

  .image {
    margin-top: 37px;
    opacity: 0;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      border-radius: 8px;

      @screen xl {
        border-radius: 20px;

      }
    }
  }
}

.rgt {
  @apply col-span-4 hidden;
  font-family: 'wp';
  color: #FF5835;


  @screen xl {
    @apply col-span-7 flex items-center mt-32;
    line-height: 75px;
  }

  .what {
    @apply relative flex;
    overflow: hidden;
    background-color: transparent;

    @screen xl {
      @apply relative -left-40;
      font-size: 250px;
      line-height: 175px;
    }

    span {
      @apply block;
    }

  }

  .you {
    @apply flex relative items-end;
    overflow: hidden;

    @screen xl {
      font-size: 125px;
      line-height: 115px;
      padding-left: 36px;
      padding-bottom: 20px;
    }

    .italic {
      @apply relative;
      font-family: 'sd';
      bottom: -10px;


    }

    span {
      @apply block;
    }
  }

}
</style>