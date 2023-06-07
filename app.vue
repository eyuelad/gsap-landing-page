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

      <section class="h-[3000px]"></section>
    </div>
  </div>
</template>


<style scoped>
#hero {
  background-color: #1b1c1e;
}
</style>
