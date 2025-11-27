<template>
  <section class="relative h-screen min-h-[700px] flex items-center text-white overflow-hidden">
    <!-- Background Image -->
    <div
      class="absolute inset-0 z-0 bg-cover bg-center"
      style="background-image: url('/imagens/bg-hero-industries.webp');"
    ></div>

    <!-- Grid Pattern -->
    <div
      class="absolute inset-0 z-10 pointer-events-none opacity-20"
      style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(22, 9, 0, 1) 1px, transparent 1px); background-size: 51px 51px;"
    ></div>

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 z-20 pointer-events-none"
      style="background: linear-gradient(180deg, rgba(115, 82, 6, 0) 0%, rgba(22, 10, 0, 1) 100%);"
    ></div>

    <div class="container mx-auto px-6 sm:px-8 lg:px-12 relative z-30 h-full flex flex-col justify-start pt-14 sm:pt-12 lg:pt-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full h-full">
        <!-- Left Column - Title -->
        <div class="flex flex-col justify-start">
          <h1 class="text-4xl sm:text-5xl lg:text-[55px] font-bold leading-tight" style="letter-spacing: 1.1px; line-height: 1.21;">
            Precision Engineering for the Most Demanding Industries
          </h1>
        </div>

        <!-- Right Column - Description -->
        <div class="flex flex-col justify-end pb-8 sm:pb-16 lg:pb-32">
          <p class="text-lg sm:text-xl lg:text-[26px] font-light leading-relaxed text-gray-100">
            Although each industry has unique challenges, they all share a common need: the certainty that their operating systems will function with maximum safety and reliability. At Maintech Solutions, we apply our precision engineering principles to translate our clients' visions into operational value, regardless of the sector's complexity. Explore the industries where our experience makes the difference.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>