<template>
  <div id="text-container">
    <div
      v-for="(line, index) in lines"
      :key="'line-' + index"
      :id="'line-' + index"
      class="relative"
    >
      <div class="inline-block opacity-20">
        {{ line }}
      </div>
      <div
        :id="'overlay-text' + index"
        class="overlay-text w-full absolute top-0 left-0"
      >
        <div class="text inline-block">{{ line }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();
const props = defineProps({
  lines: { type: Array, required: true },
});

onMounted(() => {
  props.lines.forEach((_, index) => {
    const target = document.querySelector(`#line-${index} .overlay-text .text`);

    $gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: `top 70%`,
        end: `bottom 70%`,
        scrub: 0.5,
        onUpdate: (event) => {
          const size = 100 - event.progress * 100;
          target.style.clipPath = `inset(0 ${size}% 0 0)`;
        },
      },
    });
  });
});
</script>

<style>
.overlay-text .text {
  clip-path: inset(0% 100% 0% 0%);
}
</style>
