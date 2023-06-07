<template>
  <div>
    <header
      id="header"
      class="absolute w-full z-50 bg-slate-500/5 text-slate-100"
    >
      <div class="2xl:container mx-auto px-6 py-6 flex justify-between">
        <div class="">-</div>
        <div class="text-2xl font-extrabold tracking-wider">GSAP DEMO</div>
        <div class="">-</div>
      </div>
    </header>

    <div class="flex flex-col gap-y-10 overflow-x-hidden">
      <Hero />

      <section class="w-full 2xl:container mx-auto px-6 py-12">
        <TextColorizeAnimation
          class="mb-12 text-center text-4xl lg:text-5xl 2xl:text-6xl font-bold"
          :lines="['Dive in to', 'The World of Wonders']"
        />

        <div id="section-stacked-cards" class="relative mb-12">
          <div class="w-[25%] aspect-[9/16]"></div>
          <div
            id="stacked-card-3-left"
            class="stacked-card w-[20%] aspect-[9/16] absolute top-1/2 left-8 -translate-y-1/2"
          >
            <img
              class="h-full w-full object-cover rounded-3xl shadow-xl shadow-black/5 bg-slate-300"
              src="/images/stacked-waves-1.png"
            />
          </div>
          <div
            id="stacked-card-3-right"
            class="stacked-card w-[20%] aspect-[9/16] absolute top-1/2 right-8 -translate-y-1/2"
          >
            <img
              class="h-full w-full object-cover rounded-3xl shadow-xl shadow-black/5 bg-slate-300"
              src="/images/stacked-waves-2.png"
            />
          </div>

          <div
            id="stacked-card-2-left"
            class="stacked-card w-[22.5%] aspect-[9/16] absolute top-1/2 left-[20%] -ranslate-x-1/2 -translate-y-1/2"
          >
            <img
              class="h-full w-full object-cover rounded-3xl shadow-xl shadow-black/10 bg-slate-500"
              src="/images/stacked-waves-3.png"
            />
          </div>
          <div
            id="stacked-card-2-right"
            class="stacked-card w-[22.5%] aspect-[9/16] absolute top-1/2 right-[20%] ranslate-x-1/2 -translate-y-1/2"
          >
            <img
              class="h-full w-full object-cover rounded-3xl shadow-xl shadow-black/10 bg-slate-500"
              src="/images/stacked-waves-3.png"
            />
          </div>

          <div
            id="stacked-card-1"
            class="w-[25%] aspect-[9/16] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <img
              class="h-full w-full object-cover rounded-3xl shadow-xl shadow-black/10 bg-slate-700"
              src="/images/perfect-yellow.jpg"
            />
          </div>
        </div>
      </section>

      <section class="h-[3000px]"></section>
    </div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  // stacked cards
  var stackedCardsAnimation = $gsap
    .timeline({
      scrollTrigger: {
        trigger: "#section-stacked-cards",
        start: "top 80%",
        end: "top top",
        scrub: true,
      },
    })
    .add([
      $gsap.from(".stacked-card", {
        left: "50%",
        x: "-50%",
      }),
    ]);

  // section-2
  var section2Animation = $gsap
    .timeline({
      scrollTrigger: {
        trigger: "#section-2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
    .add([
      $gsap.from(".section-2-image-container", {
        scale: 0.4,
        borderRadius: "100%",
      }),
      $gsap.to(".section-2-image-container", {
        borderRadius: "8%",
      }),
      $gsap.to(".section-2-left", {
        rotateY: 100,
      }),
      $gsap.to(".section-2-right", {
        rotateY: -100,
      }),
    ]);
});
</script>

<style scoped>
#hero {
  background-color: #1b1c1e;
}

#section-2 {
  perspective: 1000px;
}
</style>
