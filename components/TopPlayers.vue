
<template>
  <section class="text body-font bg-blend">
    <div class="container px-5 pt-24 mx-auto">
      <div class="flex flex-wrap w-full mb-4">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-strong"
          >
            Eye-Catching Players
          </h1>
          <div class="highlight h-1 w-20 rounded" />
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-base">
        </p>
      </div>
    </div>
    <Carousel class="pb-24">
      <Card
        class="xl:w-1/4 md:w-1/2 p-4"
        v-for="i in 11"
        :key="i"
        overline="Chennai Super Kings"
        title="Player"
      />
    </Carousel>
  </section>
</template>

<script>
import Card from "~/components/Card";
import Carousel from "~/components/Carousel";

export default {
  name: "TopPlayers",
  components: {
    Card,
    Carousel,
  },
};
</script>

<style scoped>
.bg-blend {
  background-color: var(--header-bg-color);
}
.highlight {
  background-color: var(--secondary);
  transition: all 300ms;
}
.highlight:hover {
  @apply w-64;
}
</style>