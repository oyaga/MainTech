<template>
  <section class="relative h-screen min-h-[700px] flex items-center text-white overflow-hidden">
    <!-- Background Image -->
    <div
      class="absolute inset-0 z-0 bg-cover bg-center"
      style="background-image: url('/imagens/Hero-About.webp');"
    ></div>

    <!-- Grid Pattern -->
    <div
      class="absolute inset-0 z-10 pointer-events-none opacity-20"
      style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(26, 18, 1, 1) 1px, transparent 1px); background-size: 50px 50px;"
    ></div>

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 z-20 pointer-events-none"
      style="background: linear-gradient(180deg, rgba(115, 82, 6, 0) 0%, rgba(22, 10, 1, 1) 100%);"
    ></div>

    <div class="container mx-auto px-6 sm:px-8 lg:px-12 relative z-30 h-full flex flex-col justify-start pt-14 sm:pt-12 lg:pt-20">
      <div class="grid grid-cols-1 lg:grid-cols-[53%_40%] gap-12 lg:gap-20 w-full h-full">
        <!-- Left Column - Title -->
        <div class="flex flex-col justify-start">
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Engenharia de <br/>Precisão para<br/>Visões Ambiciosas.
          </h1>
        </div>

        <!-- Right Column - Description -->
        <div class="flex flex-col justify-end pb-8 sm:pb-16 lg:pb-32">
          <p class="text-base sm:text-lg lg:text-xl font-light leading-relaxed text-gray-200">
            Uma Grande Visão Exige uma Fundação Inabalável. Construímos a base
            técnica do seu projeto com soluções de comissionamento tão robustas e
            confiáveis quanto a sua ambição.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
