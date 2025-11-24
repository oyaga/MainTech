<template>
  <section class="relative h-screen min-h-[700px] flex items-center text-white overflow-hidden">
    <!-- Background Image -->
    <div
      class="absolute inset-0 z-0 bg-cover bg-center"
      style="background-image: url('/imagens/Hero-O Desafio.webp');"
    ></div>

    <!-- Grid Pattern -->
    <div
      class="absolute inset-0 z-10 pointer-events-none opacity-20"
      style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(26, 18, 1, 1) 1px, transparent 1px); background-size: 50px 50px;"
    ></div>

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 z-20 pointer-events-none"
      style="background: linear-gradient(180deg, rgba(115, 82, 6, 0) 0%, rgba(26, 18, 1, 1) 100%);"
    ></div>

    <div class="container mx-auto px-6 sm:px-8 lg:px-12 relative z-30 h-full flex flex-col justify-start pt-14 sm:pt-12 lg:pt-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full h-full">
        <!-- Left Column - Title -->
        <div class="flex flex-col justify-start">
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Todo grande projeto começa com uma visão. E ganha vida com soluções confiáveis!
          </h1>
        </div>

        <!-- Right Column - Description -->
        <div class="flex flex-col justify-end pb-8 sm:pb-16 lg:pb-32">
          <p class="text-base sm:text-lg lg:text-xl font-light leading-relaxed text-gray-200">
            Sabemos o que é preciso para transformar planos complexos em realidade operacional. A distância entre a conclusão da
            construção e um arranque bem-sucedido é um caminho crítico, cheio de variáveis que não admitem erros. Milhares de
            componentes, sistemas interligados, orçamentos rigorosos e prazos inflexíveis. No meio de toda essa
            complexidade, a sua meta é clara: começar a operar com máxima segurança, eficiência e fiabilidade. É
            precisamente aí que a nossa história se cruza com a sua.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>