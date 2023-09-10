<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {
  const tl = gsap.timeline();
  const body = document.querySelector('body');
  tl.to('.hero-img', {
    opacity: 1,
    delay: 1,
    duration: 1,
  }).to('.hero-title h1', {
    y: 0,
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
});

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
    @apply relative;
    height: 100vh;
    padding-top: 75px;

    @screen md {
      @apply col-span-8;
      padding-top: 120px;
    }

    @screen xl {
      @apply col-span-10 col-start-2 pt-28;
    }

    img {
      position: absolute;
      object-fit: cover;
      height: 75%;
      width: 100%;
      border-radius: 8px;
      opacity: 0;
      top: 75px;

      @screen md {
        top: 125px;

      }
    }
  }

  &-title {
    @apply relative pb-4;
    overflow: hidden;

    h1 {
      @apply text-center;
      font-family: 'gb';
      transform: translateY(-300px);
      font-size: 45px;
      line-height: 42px;

      @screen md {
        font-size: 100px;
        line-height: 90px;
      }

      @screen lg {
        font-size: 120px;
        line-height: 106px;
      }

      @screen xl {
        font-size: 140px;
        line-height: 126px;
      }

      @screen 2xl {
        font-size: 165px;
        line-height: 150px;
      }

      .text {
        position: relative;
        background-color: #FF5835;
        border-bottom-right-radius: 16px;
        border-bottom-left-radius: 16px;
        padding: 0 12px;

        @screen md {
          padding: 0 32px;

        }

        .border {
          &-1 {
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: rgba(255, 255, 255, 0);
            border-radius: 50%;
            box-shadow: -10px -10px 0 #FF5835;
            transform: rotate(90deg);
            z-index: 1000;
            left: -6.8%;
            top: 9%;

            @screen md {
              width: 25px;
              height: 25px;
              left: -3.7%;
              top: 12.6%;
            }

            @screen xl {
              left: -2.8%;
              top: 17%;
            }

            @screen 2xl {
              left: -2.4%;
              top: 15%;
            }
          }

          &-2 {
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: rgba(255, 255, 255, 0);
            border-radius: 50%;
            box-shadow: -10px -10px 0 #FF5835;
            transform: rotate(90deg);
            z-index: 1000;
            left: -8.4%;
            top: 15.1%;

            @screen md {
              width: 25px;
              height: 25px;
              left: -4.6%;
              top: 16%;
            }

            @screen xl {
              left: -3.6%;
              top: 16%;
            }

            @screen 2xl {
              left: -3.2%;
              top: 16%;
            }
          }

          &-3 {
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: rgba(255, 255, 255, 0);
            border-radius: 50%;
            box-shadow: -10px -10px 0 #FF5835;
            transform: rotate(-5deg);
            z-index: 1000;
            right: -8.4%;
            top: 15.1%;

            @screen md {
              width: 25px;
              height: 25px;
              right: -4.6%;
              top: 16%;
            }

            @screen xl {
              right: -3.6%;
              top: 16%;
            }

            @screen 2xl {
              right: -3.2%;
              top: 16%;
            }
          }

          &-4 {
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: rgba(255, 255, 255, 0);
            border-radius: 50%;
            box-shadow: -10px -10px 0 #FF5835;
            transform: rotate(-5deg);
            z-index: 1000;
            right: -6.8%;
            top: 9%;

            @screen md {
              width: 25px;
              height: 25px;
              right: -3.7%;
              top: 12.6%;
            }

            @screen xl {
              right: -2.8%;
              top: 17%;
            }

            @screen 2xl {
              right: -2.4%;
              top: 15%;
            }
          }
        }
      }
    }
  }
}
</style>