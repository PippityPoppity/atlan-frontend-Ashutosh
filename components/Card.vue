<template>
  <div class="p-5 flex flex-grow-0">
    <div class="card bg-gray-800 rounded-lg pb-4">
      <img
        class="h-40 rounded w-full object-cover object-center mb-6"
        src="https://p.kindpng.com/picc/s/192-1920223_predict-toss-winning-teams-in-the-upcoming-week.png"
        alt="content"
      />
      <h3
        class="tracking-widest px-6 text-secondary text-xs font-medium title-font"
      >
        {{ overline }}
      </h3>
      <h2 class="text-lg px-6 text-strong font-medium title-font mb-4">
        {{ title }}
      </h2>
      <p class="leading-relaxed px-6 text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    overline: String,
    title: String,
  },
};
</script>

<style>
.card {
  min-width: 20rem;
  @apply shadow;
  background-color: #41B883;
  color: var(--text);
}
.card:hover {
  @apply shadow-lg;
}
</style>