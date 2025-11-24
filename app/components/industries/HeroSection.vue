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
            Engenharia de Precisão para as Indústrias Mais Exigentes
          </h1>
        </div>

        <!-- Right Column - Description -->
        <div class="flex flex-col justify-end pb-8 sm:pb-16 lg:pb-32">
          <p class="text-lg sm:text-xl lg:text-[26px] font-light leading-relaxed text-gray-100">
            Embora cada indústria possua desafios únicos, todas partilham uma necessidade comum: a certeza de que os seus sistemas operacionais funcionarão com máxima segurança e fiabilidade. Na Maintech Solutions, aplicamos os nossos princípios de engenharia de precisão para traduzir as visões dos nossos clientes em valor operacional, independentemente da complexidade do setor. Explore as indústrias onde a nossa experiência faz a diferença.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>