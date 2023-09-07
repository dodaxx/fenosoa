<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

onMounted(() => {
  const footer = document.querySelector('.footer');
  const footerDescriptionContent = document.querySelectorAll('.footer-description__content  span');
  const intuitiveSection = document.querySelector('.intuitive-section.modern');
  const intuitiveText = document.querySelector('.intuitive-section.modern .text');
  const textImageMdm = document.querySelectorAll('.intuitive-section > .image.mdm .text');
  const intuitiveImage = document.querySelector('.intuitive-section.modern .image');
  const borderMdm = document.querySelectorAll('.intuitive-section > .image.mdm .border-mdm');
  const socialContent = document.querySelectorAll('.content-social a span');
  const copyrightContent = document.querySelectorAll('.footer-copyright p span');
  const footerDown = document.querySelectorAll('.footer-down svg');
  const navbar = document.querySelector('nav');
  gsap.to(navbar, {
    opacity: 0,
    color: 'white',
    scrollTrigger: {
      trigger: footer,
      start: 'top 50%',
      end: 'top 50%',
      scrub: 2,
    }
  });
  gsap.to([footer, intuitiveSection, textImageMdm, borderMdm], {
    backgroundColor: 'black',
    color: 'white',
    scrollTrigger: {
      trigger: footer,
      start: 'top 50%',
      end: 'top 50%',
      scrub: 2,
    }
  });

  gsap.to([intuitiveImage, intuitiveText], {
    filter: 'blur(5px)',
    scrollTrigger: {
      trigger: footer,
      start: 'top 50%',
      end: 'top 40%',
      scrub: 1,
    }
  });
  tl.fromTo(footerDescriptionContent, {
    y: 100,
    filter: 'blur(4px)',
    opacity: 0
  },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      delay: 2,
      filter: 'blur(0px)',
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: footer,
        start: 'top 50%',
        end: 'top 40%',
        scrub: 2.2,
      },
    },
  );

  tl.fromTo(socialContent, {
    y: 100,
    filter: 'blur(4px)',
    opacity: 0

  },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      delay: 2,
      filter: 'blur(0px)',
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: footer,
        start: 'top 50%',
        end: 'top 40%',
        scrub: 2.2,
      },
    },
  );

  tl.fromTo(copyrightContent, {
    y: 100,
    filter: 'blur(4px)',
    opacity: 0

  },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      delay: 2,
      filter: 'blur(0px)',
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: footer,
        start: 'top 30%',
        end: 'top 30%',
        scrub: 2.2,

      },
    },
  );

  tl.to(footerDown, {
    color: 'white',
    scrollTrigger: {
      trigger: footer,
      start: 'top 50%',
      end: 'top 50%',
      scrub: 2.2,

    },
  },
  );
})

</script>
<template>
  <div class="footer">
    <div class="footer-description">
      <p>
        <span class="footer-description__content">
          <span v-for="i in `Don't\n miss\n your\n opportunity\n`">{{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
        <span class="footer-description__content"><br>
          <span v-for="i in `contact\n us`">{{ i.replace(/\n/gm, '&nbsp') }}</span>
        </span>
      </p>
    </div>
    <div class="footer-down">
      <IconsArrowDownIcon />
    </div>
    <div class="footer-social">
      <div class="footer-social__wrapper">
        <div class="content-social linkedin">
          <a href="">
            <span v-for="i in `linkedin`">{{ i }}</span>
          </a>
        </div>
        <div class="content-social instagram">
          <a href="">
            <span v-for="i in `instagram`">{{ i }}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <p>
        <span v-for="i in `Made\nwith\nFenosoa\n-\n2023`">{{ i.replace(/\n/gm, '&nbsp') }}</span>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  @apply relative z-10;
  background-color: #4AAA99;
  padding-top: 60px;
  padding-bottom: 10px;
  color: white;

  &-description {
    @apply flex justify-center text-center;
    font-family: 'gb';
    font-size: 75px;
    line-height: 75px;

    &__content {
      @apply flex justify-center;
      /* overflow: hidden; */

      span {
        @apply block;
      }
    }
  }

  &-down {
    @apply flex justify-center text-center;
    margin-top: 20px;

    svg {
      color: black;
    }
  }

  &-social {
    @apply flex justify-center text-center mt-8;
    font-family: 'sdr';
    font-size: 50px;
    line-height: 35px;

    &__wrapper {
      @apply flex flex-col gap-5;

      a {
        @apply flex justify-center;

        span {
          @apply block;
        }
      }
    }
  }

  &-copyright {
    @apply pt-44;

    p {
      @apply flex justify-center;
      font-family: 'sdr';

      span {
        @apply block;
      }
    }
  }
}
</style>