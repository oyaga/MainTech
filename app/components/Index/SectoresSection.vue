<template>
  <section ref="sectionRef" class="bg-[#1A1201] text-white py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-5xl font-light mb-6">Dominamos os setores mais exigentes da indústria.</h2>
      <p class="text-xl font-medium mb-12 max-w-4xl mx-auto">
        A nossa agilidade e conhecimento técnico foram testados e aprovados nos ambientes industriais mais exigentes.
        Atuamos com confiança e especialização em toda a região do Benelux e na Península Ibérica, nos seguintes setores.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Card 1: Energia -->
        <div
          class="relative bg-gradient-to-br from-[#0D0A05] to-[#1A1201] rounded-2xl p-6 flex flex-col gap-5 border border-[#2A2318] overflow-hidden transition-all duration-500 hover:border-[#FFB300] hover:shadow-2xl hover:shadow-[#FFB300]/20 hover:-translate-y-2 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
        >
          <!-- Glow effect on hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-[#FFB300]/0 to-[#FFB300]/0 group-hover:from-[#FFB300]/5 group-hover:to-transparent transition-all duration-500"></div>

          <!-- Corner decorations with animation -->
          <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FFB300] rounded-tl-2xl transition-all duration-300 group-hover:w-20 group-hover:h-20"></div>
          <div class="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FFB300] rounded-br-2xl transition-all duration-300 group-hover:w-20 group-hover:h-20"></div>

          <!-- Status badge with pulse animation -->
          <div class="flex items-center gap-2 z-10">
            <div class="relative">
              <div class="w-2 h-2 bg-[#00FF00] rounded-full"></div>
              <div class="absolute inset-0 w-2 h-2 bg-[#00FF00] rounded-full animate-ping opacity-75"></div>
            </div>
            <span class="text-[#00FF00] text-xs font-bold tracking-wider">DISPONÍVEL</span>
          </div>

          <!-- Icon with hover effect -->
          <div class="w-16 h-16 bg-[#2A2318] rounded-2xl flex items-center justify-center p-3 transition-all duration-300 group-hover:bg-[#FFB300] group-hover:scale-110 group-hover:rotate-3 z-10">
            <img src="/svg/energy.svg" alt="Energia" class="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110">
          </div>

          <!-- Title -->
          <h3 class="text-3xl font-bold tracking-tight z-10 transition-colors duration-300 group-hover:text-[#FFB300]">ENERGIA</h3>

          <!-- Description -->
          <p class="text-gray-400 text-sm leading-relaxed z-10 transition-colors duration-300 group-hover:text-gray-300">
            Comissionamento e start-up de usinas CCGT garantindo confiabilidade e operação segura.
          </p>

          <!-- Features list -->
          <ul class="space-y-2 text-sm z-10">
            <li class="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1">
              <span class="text-[#FFB300] mt-1">•</span>
              <span>Usinas CCGT</span>
            </li>
            <li class="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1" style="transition-delay: 50ms">
              <span class="text-[#FFB300] mt-1">•</span>
              <span>Confiabilidade</span>
            </li>
            <li class="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1" style="transition-delay: 100ms">
              <span class="text-[#FFB300] mt-1">•</span>
              <span>Operação Segura</span>
            </li>
          </ul>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 z-10">
            <span class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]">COMISSIONAMENTO</span>
            <span class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]">START-UP</span>
          </div>

          <!-- Ideal for section -->
          <div class="mt-auto pt-4 border-t border-[#2A2318] z-10 transition-colors duration-300 group-hover:border-[#FFB300]/30">
            <p class="text-[#FFB300] text-xs font-bold mb-1">IDEAL PARA:</p>
            <p class="text-gray-400 text-xs italic transition-colors duration-300 group-hover:text-gray-300">Empresas do setor energético</p>
          </div>
        </div>

        <!-- Card 2: Químicos & Petroquímicos -->
        <div
          class="relative bg-gradient-to-br from-[#0D0A05] to-[#1A1201] rounded-2xl p-6 flex flex-col gap-5 border border-[#2A2318] overflow-hidden transition-all duration-500 hover:border-[#FFB300] hover:shadow-2xl hover:shadow-[#FFB300]/20 hover:-translate-y-2 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
          style="transition-delay: 150ms"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-[#FFB300]/0 to-[#FFB300]/0 group-hover:from-[#FFB300]/5 group-hover:to-transparent transition-all duration-500"></div>

          <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FFB300] rounded-tl-2xl transition-all duration-300 group-hover:w-20 group-hover:h-20"></div>
          <div class="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FFB300] rounded-br-2xl transition-all duration-300 group-hover:w-20 group-hover:h-20"></div>

          <div class="flex items-center gap-2 z-10">
            <div class="relative">
              <div class="w-2 h-2 bg-[#00FF00] rounded-full"></div>
              <div class="absolute inset-0 w-2 h-2 bg-[#00FF00] rounded-full animate-ping opacity-75"></div>
            </div>
            <span class="text-[#00FF00] text-xs font-bold tracking-wider">DISPONÍVEL</span>
          </div>

          <div class="w-16 h-16 bg-[#2A2318] rounded-2xl flex items-center justify-center p-3 transition-all duration-300 group-hover:bg-[#FFB300] group-hover:scale-110 group-hover:rotate-3 z-10">
            <img src="/svg/chemicals.svg" alt="Químicos" class="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110">
          </div>

          <h3 class="text-2xl font-bold tracking-tight z-10 transition-colors duration-300 group-hover:text-[#FFB300]">QUÍMICOS & PETROQUÍMICOS</h3>

          <p class="text-gray-400 text-sm leading-relaxed z-10 transition-colors duration-300 group-hover:text-gray-300">
            Calibração e loop check em unidades químicas, com foco em conformidade e rastreabilidade.
          </p>

          <ul class="space-y-2 text-sm z-10">
            <li class="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1">
              <span class="text-[#FFB300] mt-1">•</span>
              <span>Calibração</span>
            </li>
            <li class="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1" style="transition-delay: 50ms">
              <span class="text-[#FFB300] mt-1">•</span>
              <span>Loop Check</span>
            </li>
            <li class="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1" style="transition-delay: 100ms">
              <span class="text-[#FFB300] mt-1">•</span>
              <span>Conformidade</span>
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 z-10">
            <span class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]">QUÍMICA</span>
            <span class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]">PETROQUÍMICA</span>
          </div>

          <div class="mt-auto pt-4 border-t border-[#2A2318] z-10 transition-colors duration-300 group-hover:border-[#FFB300]/30">
            <p class="text-[#FFB300] text-xs font-bold mb-1">IDEAL PARA:</p>
            <p class="text-gray-400 text-xs italic transition-colors duration-300 group-hover:text-gray-300">Indústrias químicas e petroquímicas</p>
          </div>
        </div>

        <!-- Card 3: Armazenamento & Terminal -->
        <div
          class="relative bg-gradient-to-br from-[#0D0A05] to-[#1A1201] rounded-2xl p-6 flex flex-col gap-5 border border-[#2A2318] overflow-hidden transition-all duration-500 hover:border-[#FFB300] hover:shadow-2xl hover:shadow-[#FFB300]/20 hover:-translate-y-2 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
          style="transition-delay: 300ms"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-[#FFB300]/0 to-[#FFB300]/0 group-hover:from-[#FFB300]/5 group-hover:to-transparent transition-all duration-500"></div>

          <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FFB300] rounded-tl-2xl transition-all duration-300 group-hover:w-20 group-hover:h-20"></div>
          <div class="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FFB300] rounded-br-2xl transition-all duration-300 group-hover:w-20 group-hover:h-20"></div>

          <div class="flex items-center gap-2 z-10">
            <div class="relative">
              <div class="w-2 h-2 bg-[#00FF00] rounded-full"></div>
              <div class="absolute inset-0 w-2 h-2 bg-[#00FF00] rounded-full animate-ping opacity-75"></div>
            </div>
            <span class="text-[#00FF00] text-xs font-bold tracking-wider">DISPONÍVEL</span>
          </div>

          <div class="w-16 h-16 bg-[#2A2318] rounded-2xl flex items-center justify-center p-3 transition-all duration-300 group-hover:bg-[#FFB300] group-hover:scale-110 group-hover:rotate-3 z-10">
            <img src="/svg/Storage.svg" alt="Armazenamento" class="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110">
          </div>

          <h3 class="text-2xl font-bold tracking-tight z-10 transition-colors duration-300 group-hover:text-[#FFB300]">ARMAZENAMENTO & TERMINAL</h3>

          <p class="text-gray-400 text-sm leading-relaxed z-10 transition-colors duration-300 group-hover:text-gray-300">
            Pré-comissionamento e start-up de terminais líquidos, assegurando eficiência operacional.
          </p>

          <ul class="space-y-2 text-sm z-10">
            <li class="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1">
              <span class="text-[#FFB300] mt-1">•</span>
              <span>Pré-comissionamento</span>
            </li>
            <li class="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1" style="transition-delay: 50ms">
              <span class="text-[#FFB300] mt-1">•</span>
              <span>Terminais Líquidos</span>
            </li>
            <li class="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1" style="transition-delay: 100ms">
              <span class="text-[#FFB300] mt-1">•</span>
              <span>Eficiência Operacional</span>
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 z-10">
            <span class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]">TERMINAL</span>
            <span class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]">LOGÍSTICA</span>
          </div>

          <div class="mt-auto pt-4 border-t border-[#2A2318] z-10 transition-colors duration-300 group-hover:border-[#FFB300]/30">
            <p class="text-[#FFB300] text-xs font-bold mb-1">IDEAL PARA:</p>
            <p class="text-gray-400 text-xs italic transition-colors duration-300 group-hover:text-gray-300">Empresas de armazenamento e logística</p>
          </div>
        </div>

        <!-- Card 4: Gases Industriais -->
        <div
          class="relative bg-gradient-to-br from-[#0D0A05] to-[#1A1201] rounded-2xl p-6 flex flex-col gap-5 border border-[#2A2318] overflow-hidden transition-all duration-500 hover:border-[#FFB300] hover:shadow-2xl hover:shadow-[#FFB300]/20 hover:-translate-y-2 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
          style="transition-delay: 450ms"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-[#FFB300]/0 to-[#FFB300]/0 group-hover:from-[#FFB300]/5 group-hover:to-transparent transition-all duration-500"></div>

          <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FFB300] rounded-tl-2xl transition-all duration-300 group-hover:w-20 group-hover:h-20"></div>
          <div class="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FFB300] rounded-br-2xl transition-all duration-300 group-hover:w-20 group-hover:h-20"></div>

          <div class="flex items-center gap-2 z-10">
            <div class="relative">
              <div class="w-2 h-2 bg-[#00FF00] rounded-full"></div>
              <div class="absolute inset-0 w-2 h-2 bg-[#00FF00] rounded-full animate-ping opacity-75"></div>
            </div>
            <span class="text-[#00FF00] text-xs font-bold tracking-wider">DISPONÍVEL</span>
          </div>

          <div class="w-16 h-16 bg-[#2A2318] rounded-2xl flex items-center justify-center p-3 transition-all duration-300 group-hover:bg-[#FFB300] group-hover:scale-110 group-hover:rotate-3 z-10">
            <img src="/svg/industrial-gases.svg" alt="Gases Industriais" class="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110">
          </div>

          <h3 class="text-3xl font-bold tracking-tight z-10 transition-colors duration-300 group-hover:text-[#FFB300]">GASES INDUSTRIAIS</h3>

          <p class="text-gray-400 text-sm leading-relaxed z-10 transition-colors duration-300 group-hover:text-gray-300">
            FAT, SAT e suporte em projetos de distribuição e tratamento de gases industriais.
          </p>

          <ul class="space-y-2 text-sm z-10">
            <li class="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1">
              <span class="text-[#FFB300] mt-1">•</span>
              <span>FAT & SAT</span>
            </li>
            <li class="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1" style="transition-delay: 50ms">
              <span class="text-[#FFB300] mt-1">•</span>
              <span>Distribuição</span>
            </li>
            <li class="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1" style="transition-delay: 100ms">
              <span class="text-[#FFB300] mt-1">•</span>
              <span>Tratamento de Gases</span>
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 z-10">
            <span class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]">GASES</span>
            <span class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]">INDUSTRIAL</span>
          </div>

          <div class="mt-auto pt-4 border-t border-[#2A2318] z-10 transition-colors duration-300 group-hover:border-[#FFB300]/30">
            <p class="text-[#FFB300] text-xs font-bold mb-1">IDEAL PARA:</p>
            <p class="text-gray-400 text-xs italic transition-colors duration-300 group-hover:text-gray-300">Empresas de gases industriais</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true
        }
      })
    },
    {
      threshold: 0.2
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>