<template>
  <section class="text bg-blend body-font">
    <div
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-strong"
        >
          Discover and Search:
          <br class="hidden lg:inline-block" />
          IPL throughout the years
        </h1>
        <p class="mb-8 leading-relaxed">
          Example text here
        </p>
        <div class="flex justify-center">
          <button
            class="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
          >
            Search
          </button>
          <button
            class="ml-6 inline-flex text-white-800 bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg"
          >
            Discover
          </button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="http://www.pngall.com/wp-content/uploads/2017/04/IPL-10-Logo-PNG.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.secondary {
  background-color: #34495E;
}
.secondary:hover,
.secondary:focus {
  background-color: #34495E;
}
.bg-blend {
  background-color: #34495E;
}
</style>