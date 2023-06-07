<template>
  <section id="hero">
    <div
      class="relative 2xl:container mx-auto px-6 py-32 xl:h-screen flex items-center text-slate-100"
    >
      <div class="hero-image-container absolute right-0 z-10 w-1/3 rotate-90">
        <img
          class="aspect-square"
          src="/images/point-yellow.png"
          alt="hero-image"
        />
      </div>
      <div class="relative z-0">
        <div class="z-10 text-3xl font-semibold">
          Get ready to witness a bunch of ...
        </div>
        <div class="z-10 text-9xl font-bold">Awesome GSAP</div>
        <div class="relative z-0 text-9xl font-bold">Animations</div>
        <div class="z-10 text-9xl font-bold">Enjoy!</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap
    .timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    })
    .to(".hero-image-container", {
      // scale: 1.1,
      y: "60%",
      rotate: 35,
    });
});
</script>
