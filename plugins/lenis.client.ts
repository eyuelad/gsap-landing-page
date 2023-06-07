import Lenis from "@studio-freight/lenis";

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis();

  // lenis.on("scroll", (e: any) => {
  //   console.log(e);
  // });

  function scrollFn(time: any) {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  }

  requestAnimationFrame(scrollFn);

  return {
    provide: { lenis },
  };
});
