<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
  const attractiveSection = document.querySelector('.attractive');
  const textAttractiveContent = document.querySelectorAll('.text-content.attr > span');
  const textImageAttr = document.querySelectorAll('.intuitive-section > .image.attr .text');
  const maskAttractive = document.querySelector('.intuitive-section > .image.attr .mask-attr');
  const borderAttr = document.querySelectorAll('.intuitive-section > .image.attr .border-attr');

  const modernSection = document.querySelector('.modern');
  const textModernContent = document.querySelectorAll('.text-content.mdm > span');
  const maskModern = document.querySelectorAll('.intuitive-section > .image.mdm .mask-mdm ');
  const textImageMdm = document.querySelectorAll('.intuitive-section > .image.mdm .text');
  const borderMdm = document.querySelectorAll('.intuitive-section > .image.mdm .border-mdm');

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

  gsap.fromTo(textAttractiveContent, {
    y: 100,
    filter: 'blur(4px)'
  },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      // delay: 1,
      filter: 'blur(0px)',
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: attractiveSection,
        start: "top 60%",
        end: "top 35%",
        toggleActions: 'play none none reverse',
      },
    },
  )
  gsap.to(maskAttractive, {
    duration: 1,
    width: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: attractiveSection,
      start: "top 60%",
      // end: "top 0%",
      toggleActions: 'play none none reverse',
    },
  });
  gsap.fromTo([textImageAttr, borderAttr], {
    y: -200,
  }, {
    y: 0,
    scrollTrigger: {
      trigger: attractiveSection,
      start: "top 25%",
      end: "top 25%",
      // toggleActions: 'play none none reverse',
      scrub: 1,
    }
  });

  gsap.fromTo(textModernContent, {
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
        toggleActions: 'play none none reverse',
      },
    },
  )
  gsap.to(maskModern, {
    width: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: modernSection,
      start: "top 55%",
      end: "top 55%",
      toggleActions: 'play none none reverse',
    },
  })
  gsap.fromTo([textImageMdm, borderMdm], {
    y: -200,
  }, {
    y: 0,
    delay: 0.5,
    scrollTrigger: {
      trigger: modernSection,
      start: "top 25%",
      end: "top 25%",
      // toggleActions: 'play none none reverse',
      scrub: 1,
    }
  });


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
      <div class="border-type-1 border-attr"></div>
      <div class="border-type-2 border-attr"></div>
      <div class="text">
        <p>#FERMEAINA</p>
      </div>
      <img src="@/assets/images/intuitive/ferme-aina.png" alt="">
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
      <div class="border-type-3 border-mdm"></div>
      <div class="border-type-4 border-mdm"></div>
      <div class="text green">
        <p>#MAILAKA</p>
      </div>
      <img src="@/assets/images/intuitive/mailaka.png" alt="">
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

  .border-type {
    &-1 {
      position: absolute;
      right: 30%;
      width: 25px;
      height: 25px;
      background-color: rgba(226, 153, 153, 0);
      border-radius: 50%;
      box-shadow: -10px -10px 0 rgb(0, 0, 0);
      transform: rotate(90deg);
      z-index: 1000;
    }



    &-2 {
      position: absolute;
      right: 0;
      top: 65px;
      width: 25px;
      height: 25px;
      z-index: 1000;
      background-color: rgba(12, 12, 12, 0);
      border-radius: 50%;
      box-shadow: -10px -10px 0 rgb(0, 0, 0);
      transform: rotate(90deg);
    }

    &-3 {
      position: absolute;
      right: 30%;
      width: 25px;
      height: 25px;
      background-color: rgba(226, 153, 153, 0);
      border-radius: 50%;
      box-shadow: -10px -10px 0 #4AAA99;
      transform: rotate(90deg);
      z-index: 1000;
    }

    &-4 {
      position: absolute;
      right: 0;
      top: 65px;
      width: 25px;
      height: 25px;
      z-index: 1000;
      background-color: rgba(12, 12, 12, 0);
      border-radius: 50%;
      box-shadow: -10px -10px 0 #4AAA99;
      transform: rotate(90deg);
    }
  }

  img {
    border-radius: 16px;
  }

  .text {
    background-color: rgb(0, 0, 0);
    position: absolute;
    right: 0;
    height: 50px;
    font-family: 'gb';
    font-size: 36px;
    width: 30%;
    height: 65px;
    padding-left: 20px;
    border-bottom-left-radius: 20px;
    z-index: 1000;
    color: white;

    &.green {
      background-color: #4AAA99;
    }
  }


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