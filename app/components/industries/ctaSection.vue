<template>
  <section class="relative py-[138px] bg-gradient-to-b from-[#160a00] to-[#ffb300] overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Floating circles -->
      <div class="absolute top-[10%] left-[5%] w-64 h-64 bg-[#ffb300] rounded-full opacity-5 blur-3xl animate-float"></div>
      <div class="absolute top-[40%] right-[10%] w-96 h-96 bg-[#ff8c00] rounded-full opacity-5 blur-3xl animate-float-delayed"></div>
      <div class="absolute bottom-[20%] left-[15%] w-80 h-80 bg-[#ffb300] rounded-full opacity-5 blur-3xl animate-float-slow"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Title -->
      <h2 class="text-[96px] font-bold text-white text-center mb-[27px] leading-normal">
        LET'S TALK
      </h2>

      <!-- Divider Line -->
      <div class="w-full max-w-[993px] h-[10px] mx-auto mb-[27px] bg-gradient-to-r from-white to-transparent border border-white rounded"></div>

      <!-- Contact Cards -->
      <div class="flex flex-wrap justify-center items-center gap-[79px] px-[37px] py-[33px]">
        <!-- Phone Card -->
        <div class="backdrop-blur-sm bg-white/8 border border-white/46 rounded-[19px] w-[294px] h-[250px] flex flex-col items-center justify-center gap-[11px] px-0 py-[19px] transition-transform hover:scale-105">
          <!-- Icon Circle -->
          <div class="backdrop-blur-sm bg-white/10 border border-white/27 rounded-full w-[86px] h-[86px] flex items-center justify-center">
            <div class="w-[51px] h-[51px]">
              <img src="/svg/phone.svg" alt="Phone" class="w-full h-full object-contain brightness-0 invert">
            </div>
          </div>

          <h3 class="text-[36px] font-bold text-white text-center leading-normal">
            Phone:
          </h3>

          <a href="tel:+32492846233" class="text-[25px] font-light text-white text-center leading-normal hover:underline transition-all">
            +32 492 84 62 33
          </a>
        </div>

        <!-- Email Card -->
        <div class="backdrop-blur-sm bg-white/8 border border-white/46 rounded-[19px] w-[294px] h-[250px] flex flex-col items-center justify-center gap-[11px] px-0 py-[19px] transition-transform hover:scale-105">
          <!-- Icon Circle -->
          <div class="backdrop-blur-sm bg-white/10 border border-white/27 rounded-full w-[86px] h-[86px] flex items-center justify-center">
            <div class="w-[51px] h-[51px]">
              <img src="/svg/email.svg" alt="Email" class="w-full h-full object-contain brightness-0 invert">
            </div>
          </div>

          <h3 class="text-[36px] font-bold text-white text-center leading-normal">
            Email:
          </h3>

          <a href="mailto:info@maintechsolutions.be" class="text-[25px] font-light text-white text-center leading-normal hover:underline transition-all">
            info@maintechsolutions.be
          </a>
        </div>

        <!-- Location Card -->
        <div class="backdrop-blur-sm bg-white/8 border border-white/46 rounded-[19px] w-[294px] h-[250px] flex flex-col items-center justify-center gap-[11px] px-0 py-[19px] transition-transform hover:scale-105">
          <!-- Icon Circle -->
          <div class="backdrop-blur-sm bg-white/10 border border-white/27 rounded-full w-[86px] h-[86px] flex items-center justify-center">
            <div class="w-[51px] h-[51px]">
              <img src="/svg/location.svg" alt="Address" class="w-full h-full object-contain brightness-0 invert">
            </div>
          </div>

          <h3 class="text-[36px] font-bold text-white text-center leading-normal">
            Address
          </h3>

          <p class="text-[25px] font-light text-white text-center leading-normal px-4">
            Heilig-Hartstraat 31<br>
            Beerse 2340 - Belgium
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-30px) translateX(20px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(40px) translateX(-30px);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(-25px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 12s ease-in-out infinite;
}
</style>