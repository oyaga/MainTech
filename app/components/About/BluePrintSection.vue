<template>
  <section class="relative w-full overflow-hidden">
    <!-- Video Background -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="w-full h-auto block"
    >
      <source src="/imagens/slide/bg-slide-blueprint.webm" type="video/webm" />
    </video>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black opacity-20"></div>



    <!-- Slide Content -->
    <div class="absolute inset-0 z-10 h-full flex flex-col justify-center items-center text-white">
      <div class="text-center w-full">
        <div
          class="bg-[rgba(25,125,175,0.87)] p-2 rounded-2xl shadow-lg max-w-4xl mx-auto flex flex-col gap-2"
        >
          <h2 class="text-5xl font-bold">
            O Blueprint para a Execução Perfeita
          </h2>
          <p class="text-xl">
            A nossa metodologia transforma a abstração em operação através de um
            processo rigoroso e controlado. Cada etapa é um passo calculado para
            construir a sua realidade com a máxima fiabilidade e precisão.
          </p>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10">
        <img src="/svg/blueprint-arrow.svg" alt="Scroll down" class="h-10" />
      </div>
    </div>
  </section>
</template>