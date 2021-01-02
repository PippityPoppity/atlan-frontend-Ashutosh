<template>
  <div>
    <Hero />
    <Gallery />
    <TopPlayers />
    <Stadiums />
    <footer class="h-6 w-full" />
  </div>
</template>

<script>
import Card from "~/components/Card";
import Gallery from "~/components/Gallery";
import Hero from "~/components/Hero";
import TopPlayers from "~/components/TopPlayers";
import Stadiums from "~/components/Stadiums";

export default {
  name: "Discover",
  components: {
    Card,
    Hero,
    Gallery,
    Stadiums,
    TopPlayers,
  },
  transition: "fade",
  data: function () {
    return {
      title: "title",
      desc: "desc",
      url:
        "https://www.searchpng.com/wp-content/uploads/2019/01/Ms-Dhoni-PNG-Image-Dhoni-transparent-background-837x1024.png"
    };
  },
};
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter {
  opacity: 0.1;
}
.fade-leave-to,
.fade-leave {
  opacity: 0;
}
.fade-move {
  transition: transform 0.2s;
}
</style>
