<template>
  <section class="relative h-screen min-h-[700px] flex items-center text-white overflow-hidden">
    <!-- Background Image -->
    <div
      class="absolute inset-0 z-0 bg-cover bg-center"
      style="background-image: url('https://www.figma.com/api/mcp/asset/9bcd6df8-2679-4eb8-bf6b-a2f4ce7052da');"
    ></div>

    <!-- Black Overlay -->
    <div class="absolute inset-0 z-10 bg-black opacity-50"></div>

    <!-- Grid Pattern -->
    <div
      class="absolute inset-0 z-20 pointer-events-none opacity-20"
      style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(22, 9, 0, 1) 1px, transparent 1px); background-size: 51px 51px;"
    ></div>

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 z-30 pointer-events-none"
      style="background: linear-gradient(180deg, rgba(115, 82, 6, 0) 0%, rgba(22, 10, 0, 1) 100%);"
    ></div>

    <div class="container mx-auto px-6 sm:px-8 lg:px-12 relative z-40 h-full flex items-center">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full">
        <!-- Left Column - Title -->
        <div class="flex flex-col justify-center">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Engenharia que Transforma Projetos em Performance.
          </h1>
        </div>

        <!-- Right Column - Description -->
        <div class="flex flex-col justify-center">
          <p class="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-gray-200">
            Da validação em fábrica até a entrega final da documentação: garantimos que seus ativos operem com segurança máxima, precisão absoluta e retorno financeiro garantido.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No need for heroImage variable anymore as the image is directly in style attribute
</script>

<style scoped>
/* Custom font weights for Inter are handled by Tailwind classes */
h1 {
  /* font-family: 'Inter', sans-serif; */
  /* font-weight: 700; */
}

p {
  margin-bottom: 0;
}

/* div[data-node-id="37:72"] { */
  /* font-family: 'Inter', sans-serif; */
  /* font-weight: 300; */
/* } */

/* Ensure gradient works properly */
.bg-gradient-to-b {
  /* This custom gradient is replaced by the linear-gradient in the template */
}
</style>