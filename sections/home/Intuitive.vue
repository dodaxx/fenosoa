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
  const imageAttractive = document.querySelectorAll('.intuitive-section > .image.attr');
  const imageModern = document.querySelectorAll('.intuitive-section > .image.mdm');
  const _whatSection = document.querySelector('.what-section');



  const heightWhatSection = _whatSection.getBoundingClientRect().bottom - _whatSection.getBoundingClientRect().top;
  const heightModernSection = modernSection.getBoundingClientRect().bottom - modernSection.getBoundingClientRect().top;
  const heightAttractiveSection = attractiveSection.getBoundingClientRect().bottom - attractiveSection.getBoundingClientRect().top;
  const positionEndAttractiveSection = heightAttractiveSection + (heightModernSection * 15 / 100);
  const positionEndWhatSection = heightWhatSection + heightAttractiveSection + (heightModernSection * 15 / 100);

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

  const tl = gsap.timeline();
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
  ).fromTo(imageAttractive, {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: attractiveSection,
      start: "top 55%",
      end: "top 55%",
      scrub: 2.4,
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
  ).fromTo(imageModern, {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1,
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
          <span v-for="i in `intuitive,\n accessible`"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
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
      <img src="@/assets/images/intuitive/fa.png" alt="">
    </div>
  </CommonAppGrid>
  <CommonAppGrid class-content="intuitive-section modern">
    <div class="text">
      <p>
        <span class="text-content mdm">
          <span v-for="i in `To\n arrange\nyou `"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
        <span class="text-content mdm">
          <span v-for="i in `website\nmodern, `"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
        <span class="text-content mdm">
          <span v-for="i in `minimalist\ndesign `"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
        <span class="text-content mdm">
          <span v-for="i in ` work\nin\na\nsimple way`"> {{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
      </p>
    </div>
    <div class="image mdm">
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
  @apply col-start-8 col-span-4;

  img {
    border-radius: 20px;
  }
}
</style>