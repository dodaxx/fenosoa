export default function useAnimation() {
  return new Promise((resolve) => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then((St) => {
        const ScrollTrigger = St.default;
        gsap.registerPlugin(ScrollTrigger);

        resolve({ gsap, ScrollTrigger });
      });
    });
  });
}
