<script setup>
import { gsap } from 'gsap';

const tl = gsap.timeline();
const route = useRoute();

const navlinksData = [
  {
    label: 'HOME',
    background: 'yellow',
    path: '/'
  },
  {
    label: 'ABOUT',
    background: 'green',
    path: '/about'
  }
]

function handleToggleMenu(isShowed) {
  const links = document.querySelector('.links');
  const navlinks = document.querySelectorAll('.navlinks ul > li> .navlinks-content > span');
  const btn = document.querySelector('.less');

  tl.to(links, {
    y: isShowed ? 0 : '-100%',
    ease: isShowed ? "power4.out" : "power2.out",
    duration: isShowed ? 0.2 : 0.2,
    onComplete: () => {
      const links = document.querySelector('.links');
      const arr = navlinksData.filter((i) => i.path === route.path);
      const el = document.querySelector(`.navlink-${arr[0].label.toLowerCase()}`);
      if (isShowed) {
        setTimeout(() => {
          links.classList.add(arr[0].background);
          el.classList.add('active');
        }, 500);
      }
      else {
        setTimeout(() => {
          links.classList.remove(arr[0].background);
          el.classList.remove('active');
        }, 500);
      }
    }
  });
  tl.fromTo(navlinks, {
    y: isShowed ? 200 : 0,
    filter: isShowed ? 'blur(4px)' : 'blur(0px)'
  }, {
    y: isShowed ? 0 : 200,
    opacity: 1,
    duration: isShowed ? 0.5 : 0.3,
    ease: "power4.out",
    delay: 0.1,
    filter: isShowed ? 'blur(0px)' : 'blur(4px)',
    stagger: {
      amount: 0.3
    },
  });
  tl.fromTo(btn, {
    opacity: isShowed ? 0 : 1,
    filter: isShowed ? 'blur(4px)' : 'blur(0px)',
  }, {
    opacity: isShowed ? 1 : 0,
    filter: isShowed ? 'blur(0px)' : 'blur(4px)',
  });

}


onMounted(() => {
  const logo = document.querySelector('.logo > .wrapper');
  const menu = document.querySelector('.menu');

  tl.fromTo([logo, menu], {
    opacity: 0,
    filter: 'blur(4px)'
  }, {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 0.5,
    filter: 'blur(0px)',
    stagger: {
      amount: 0.5
    },
  });
});



function enterNavlinks(e, c, p) {
  if (route.path !== p) {
    const links = document.querySelector('.links');
    links.classList.add(c);
  }
};
function leaveNavlinks(e, c, p) {
  if (route.path !== p) {
    const links = document.querySelector('.links');
    links.classList.remove(c);
    // e.target.classList.remove('active')
  }
};


</script>
<template>
  <nav>
    <div class="logo">
      <div class="wrapper">
        <span v-for="t in 'DOD'">{{ t }}</span>
        <span class="reverse">A</span>
        <span v-for="t in 'XX'">{{ t }}</span>
      </div>
    </div>
    <div class="menu" @click="handleToggleMenu(true)">
      <span v-for="t in 'More'">{{ t }}</span>
    </div>
    <div class="links ">
      <div class="links-wrapper">
        <div class="less" @click="handleToggleMenu(false)">
          <button>
            Less
          </button>
        </div>
        <div class="navlinks">
          <ul>
            <li v-for="(d, k) in navlinksData" :class="`navlink-${d.label.toLowerCase()}`"
              @mouseenter="(e) => enterNavlinks(e, d.background, d.path)"
              @mouseleave="(e) => leaveNavlinks(e, d.background, d.path)" :key="`$-${k}`">
              <span class="navlinks-content">
                <span v-for="i in `${d.label}`">{{ i }}</span>
              </span>
              <div class="svg">
                <DisplayNavlinkActive />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped lang="scss">
nav {
  @apply flex justify-between items-center fixed;
  font-family: 'wp';
  width: 100%;
  z-index: 1000;
  padding: 10px 4px;

  @screen md {
    padding: 30px 8px;
  }

  @screen xl {
    padding: 30px 32px 0 32px;

  }
}

.logo {
  .wrapper {
    @apply flex justify-center items-center;
    opacity: 0;
    font-size: 25px;

    @screen md {
      font-size: 30px;

    }

    span {
      display: block;
    }

    .reverse {
      @apply relative;
      transform: rotate(180deg);
      top: -2px;

      @screen xl {
        top: -3px;

      }
    }
  }
}

.menu {
  /* @apply col-start-12; */
  opacity: 0;
  cursor: pointer;
  font-size: 20px;

  @screen md {
    font-size: 25px;

  }
}

.links {
  @apply absolute top-0 left-0;
  width: 100%;
  height: 100vh;
  transform: translateY(-100%);
  background-color: black;
  padding: 30px 32px 0 32px;
  transition: 0.2s;

  &-wrapper {
    @apply grid grid-cols-12 gap-5;

    .less {
      @apply col-start-12 flex justify-end;
      cursor: pointer;

      button {
        font-size: 25px;
        color: white;
        font-size: 25px;
        border: transparent;

        &:hover {
          color: #FF5835;
        }
      }
    }

    .navlinks {
      @apply col-start-5 col-span-4;
      /* height: 100%; */
      padding-top: 170px;
      font-family: 'gb';

      li {
        @apply relative;
        font-size: 170px;
        color: white;
        line-height: 150px;
        cursor: pointer;

        &.active {
          color: #FF5835 !important;

          .svg {
            width: 100%;
          }
        }

        &:hover {
          color: #FF5835;
        }

        .navlinks-content {
          @apply flex;
          overflow: hidden;

          span {
            @apply block;

          }
        }

        .svg {
          @apply absolute;
          left: -20%;
          top: 20%;
          overflow: hidden;
          width: 0;
          transition: all 0.2s;

        }
      }
    }
  }

  &.yellow {
    background-color: #F9DCC5;
  }

  &.green {
    background-color: #4AAA99;
  }
}
</style>