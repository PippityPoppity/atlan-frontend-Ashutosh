<template>
  <section class="text bg-blend body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-strong"
        >
          IPL at a glance
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          EXAMPLE TEXT
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 sm:w-1/2 p-4" v-for="i in 6" :key="i">
          <div class="flex relative">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
              src="http://www.pngall.com/wp-content/uploads/2017/04/IPL-Logo-Transparent-PNG.png"
            />
            <div
              class="px-8 py-10 relative w-full border-4 bg-blend opacity-0 hover:opacity-100 rounded transition-all duration-500"
            >
              <h2
                class="tracking-widest text-sm title-font font-medium text-secondary mb-1"
              >
                THE BACKGROUND
              </h2>
              <h1 class="title-font text-lg font-medium text text-strong mb-3">
                CAPTION
              </h1>
              <p class="leading-relaxed">
                where, when and who picture details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Gallery",
};
</script>

<style scoped>
.bg-blend {
  background-color: var(--header-bg-color);
  border-color: var(--primary);
}
</style>