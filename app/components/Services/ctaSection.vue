<template>
  <div class="bg-gradient-to-b from-[#160a00] to-[#ffb300] relative w-full py-32">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Main Title -->
      <div class="flex flex-col items-center gap-7 mb-12">
        <h2 class="text-white text-7xl md:text-8xl lg:text-[96px] font-bold text-center leading-tight">
          LET'S TALK
        </h2>

        <!-- Decorative line with gradient -->
        <div class="h-[10px] w-full max-w-[993px] bg-gradient-to-r from-white to-transparent border-t border-white rounded-full"></div>
      </div>

      <!-- Contact Cards -->
      <div class="flex flex-wrap justify-center gap-8 lg:gap-20 mb-12 px-4 lg:px-9">
        <!-- Phone Card -->
        <div
          class="backdrop-blur-sm bg-white/8 border border-white/46 rounded-[19px] w-full sm:w-[294px] h-auto sm:h-[250px] p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
        >
          <div class="backdrop-blur-sm bg-white/10 border border-white/27 rounded-full w-[86px] h-[86px] flex items-center justify-center mb-2">
            <img src="/svg/phone.svg" alt="Phone" class="w-[51px] h-[51px] filter brightness-0 invert" />
          </div>
          <p class="text-white text-4xl font-bold text-center">Phone:</p>
          <p class="text-white text-2xl font-light text-center">+32 492 84 62 33</p>
        </div>

        <!-- Email Card -->
        <div
          class="backdrop-blur-sm bg-white/8 border border-white/46 rounded-[19px] w-full sm:w-[294px] h-auto sm:h-[250px] p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
        >
          <div class="backdrop-blur-sm bg-white/10 border border-white/27 rounded-full w-[86px] h-[86px] flex items-center justify-center mb-2">
            <img src="/svg/email.svg" alt="Email" class="w-[51px] h-[51px] filter brightness-0 invert" />
          </div>
          <p class="text-white text-4xl font-bold text-center">Email:</p>
          <p class="text-white text-2xl font-light text-center">info@maintechsolutions.be</p>
        </div>

        <!-- Address Card -->
        <div
          class="backdrop-blur-sm bg-white/8 border border-white/46 rounded-[19px] w-full sm:w-[294px] h-auto sm:h-[250px] p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
        >
          <div class="backdrop-blur-sm bg-white/10 border border-white/27 rounded-full w-[86px] h-[86px] flex items-center justify-center mb-2">
            <img src="/svg/location.svg" alt="Address" class="w-[51px] h-[51px] filter brightness-0 invert" />
          </div>
          <p class="text-white text-4xl font-bold text-center">Address</p>
          <p class="text-white text-2xl font-light text-center leading-snug">
            Heilig-Hartstraat 31<br />
            Beerse 2340 - Belgium
          </p>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="flex flex-col items-center gap-8 mt-16">
        <p class="text-white text-3xl md:text-4xl text-center font-normal">
          Ready to start your next project?
        </p>

        <a
          href="#contato"
          class="backdrop-blur-sm bg-white/15 border-2 border-white/85 rounded-[20px] px-10 py-3 text-white text-3xl md:text-4xl font-normal transition-all duration-300 hover:bg-white/25 hover:scale-110 hover:shadow-2xl hover:shadow-white/30 active:scale-95"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
/* Adds smoothness to transitions */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>