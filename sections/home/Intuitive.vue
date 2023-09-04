<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
  const attractiveSection = document.querySelector('.attractive');
  const attractive = document.querySelector('.modern');
  const modernSection = document.querySelector('.modern');
  const textAttractiveContent = document.querySelectorAll('.text-content.attr > span');
  const textModernContent = document.querySelectorAll('.text-content.mdm > span');
  const maskAttractive = document.querySelectorAll('.intuitive-section > .image.attr .mask-attr');
  const imageAttractive = document.querySelectorAll('.intuitive-section > .image.attr img');
  const maskModern = document.querySelectorAll('.intuitive-section > .image.mdm .mask-mdm ');
  const imageModern = document.querySelectorAll('.intuitive-section > .image.mdm ');
  const _whatSection = document.querySelector('.what-section');


  const heightWhatSection = _whatSection.getBoundingClientRect().bottom - _whatSection.getBoundingClientRect().top;
  const heightModernSection = modernSection.getBoundingClientRect().bottom - modernSection.getBoundingClientRect().top;
  const heightAttractiveSection = attractiveSection.getBoundingClientRect().bottom - attractiveSection.getBoundingClientRect().top;
  const positionEndAttractiveSection = heightAttractiveSection + (heightModernSection * 15 / 100);
  const positionEndWhatSection = heightWhatSection + heightAttractiveSection + (heightModernSection * 15 / 100);

  const tl = gsap.timeline();

  ScrollTrigger.create({
    trigger: _whatSection,
    start: '20% 15%',
    end: `${positionEndWhatSection} 15%`,
    pin: true,
    pinSpacing: false,
  });
  ScrollTrigger.create({
    trigger: attractiveSection,
    start: 'top 15%',
    end: `${positionEndAttractiveSection} 15%`,
    pin: true,
    pinSpacing: false,
  });
  ScrollTrigger.create({
    trigger: modernSection,
    start: 'top 25%',
    end: '25% 25%',
    pin: true,
    pinSpacing: false,
  });

  tl.fromTo(textAttractiveContent, {
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
        trigger: attractiveSection,
        start: "top 60%",
        end: "top 35%",
        scrub: 2.4,
      },
    },
  ).to(maskAttractive, {
    duration: 1,
    width: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: attractiveSection,
      start: "top 25%",
      end: "top 10%",
      scrub: 1,
    },
  })

  gsap.fromTo(imageAttractive, {
    scale: 2
  }, {
    duration: 1,
    scale: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: attractiveSection,
      start: "top 25%",
      end: "top 5%",
      scrub: 1,
    },
  })

  tl.fromTo(textModernContent, {
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
        trigger: modernSection,
        start: "top 60%",
        end: "top 35%",
        scrub: 2.4,
      },
    },
  ).to(maskModern, {
    width: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: modernSection,
      start: "top 55%",
      end: "top 55%",
      scrub: 2.4,

    },
  })

})



</script>
<template>
  <CommonAppGrid class-content="intuitive-section attractive">
    <div class="text">
      <p>
        <span class="text-content attr">
          <span v-for="i in `Let's\n create\n an`"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
        <span class="text-content attr">
          <span v-for="i in `intuitive,\n accessible,`"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
        <span class="text-content attr">
          <span v-for="i in `attractive\n website`"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
        <span class="text-content attr">
          <span v-for="i in ` and\n mobile\n application`"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
      </p>
    </div>
    <div class="image attr">
      <span class="mask-attr"></span>
      <img src="@/assets/images/intuitive/fa.png" alt="">
    </div>
  </CommonAppGrid>
  <CommonAppGrid class-content="intuitive-section modern">
    <div class="text">
      <p>
        <span class="text-content mdm">
          <span v-for="i in `To\n arrange\nyour `"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
        <span class="text-content mdm">
          <span v-for="i in `website\nmodern, `"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
        <span class="text-content mdm">
          <span v-for="i in `minimalist\ndesign `"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
        <span class="text-content mdm">
          <span v-for="i in ` work\nin\na\nsimple\n way`"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
      </p>
    </div>
    <div class="image mdm">
      <span class="mask-mdm"></span>
      <img src="@/assets/images/intuitive/mail.png" alt="">
    </div>
  </CommonAppGrid>
</template>

<style scoped lang="scss">
.intuitive-section {
  padding-top: 135px;
  background-color: black;
  color: white;
  height: 90vh;
  border-radius: 20px;
}

.modern {
  background-color: #4AAA99;
  color: black;
}

.text {
  @apply col-start-2 col-span-5;
  font-size: 75px;
  line-height: 75px;
  font-family: 'sdr';

  p {
    .text-content {
      @apply flex;
      overflow: hidden;

      span {
        @apply block;
      }
    }
  }
}

.image {
  @apply col-start-8 col-span-4 relative;
  overflow: hidden;
  height: 300px;

  .mask-attr {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 10;
  }

  .mask-mdm {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #4AAA99;
    z-index: 10;
  }
}
</style>