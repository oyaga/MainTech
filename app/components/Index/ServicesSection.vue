<template>
  <section ref="sectionRef" class="bg-[#AF8019] text-white py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-5xl font-bold mb-6">O nosso método é o seu manual para um arranque sem falhas.</h2>
      <p class="text-xl font-light mb-12 max-w-4xl mx-auto">
        Acompanhamos o cliente desde os testes de fábrica até a entrega final da planta, garantindo que tudo funcione com segurança, rastreabilidade e eficiência.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card 1: FAT / SAT -->
        <div
          class="relative bg-gradient-to-br from-[#FFF4D6] to-[#FFE19A] text-[#1A1201] rounded-2xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A1201]/30 hover:-translate-y-3 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
        >
          <!-- Icon -->
          <div class="w-20 h-20 bg-[#B07E09] rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 self-start">
            <img src="/svg/fat-sat.svg" alt="FAT/SAT" class="w-full h-full object-contain brightness-0 invert">
          </div>

          <div class="flex-1">
            <h3 class="text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#B07E09]">FAT / SAT</h3>
            <p class="text-sm font-semibold text-[#B07E09] mb-3 tracking-wider">FACTORY & SITE ACCEPTANCE TEST</p>
            <p class="text-base leading-relaxed text-gray-700">São testes feitos antes e depois da instalação dos equipamentos. Garantem que tudo está conforme o projeto e funciona corretamente, desde a fábrica até o local final de operação.</p>
          </div>

          <a href="/services#fat-sat" class="bg-[#B07E09] text-white rounded-full py-3 px-8 self-start font-semibold transition-all duration-300 hover:bg-[#8B6007] hover:px-10 flex items-center gap-2 group/btn">
            Saiba Mais
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" class="transition-transform duration-300 group-hover/btn:translate-x-1">
              <path d="M1 1L5 5.5L1 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <!-- Decorative element -->
          <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#B07E09]/10 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-[#B07E09]/20"></div>
        </div>
        <!-- Card 2: Calibração -->
        <div
          class="relative bg-gradient-to-br from-[#FFF4D6] to-[#FFE19A] text-[#1A1201] rounded-2xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A1201]/30 hover:-translate-y-3 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
          style="transition-delay: 100ms"
        >
          <div class="w-20 h-20 bg-[#B07E09] rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 self-start">
            <img src="/svg/Instruments.svg" alt="Calibração" class="w-full h-full object-contain brightness-0 invert">
          </div>

          <div class="flex-1">
            <h3 class="text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#B07E09]">Calibração</h3>
            <p class="text-sm font-semibold text-[#B07E09] mb-3 tracking-wider">INSTRUMENTOS E ATUADORES</p>
            <p class="text-base leading-relaxed text-gray-700">Consiste em ajustar e certificar sensores, válvulas e medidores para que funcionem com precisão total. Cada item recebe identificação e certificado, dando confiança e rastreabilidade ao processo.</p>
          </div>

          <a href="/services#calibracao" class="bg-[#B07E09] text-white rounded-full py-3 px-8 self-start font-semibold transition-all duration-300 hover:bg-[#8B6007] hover:px-10 flex items-center gap-2 group/btn">
            Saiba Mais
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" class="transition-transform duration-300 group-hover/btn:translate-x-1">
              <path d="M1 1L5 5.5L1 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#B07E09]/10 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-[#B07E09]/20"></div>
        </div>

        <!-- Card 3: Loop Check -->
        <div
          class="relative bg-gradient-to-br from-[#FFF4D6] to-[#FFE19A] text-[#1A1201] rounded-2xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A1201]/30 hover:-translate-y-3 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
          style="transition-delay: 200ms"
        >
          <div class="w-20 h-20 bg-[#B07E09] rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 self-start">
            <img src="/svg/loop-check.svg" alt="Loop Check" class="w-full h-full object-contain brightness-0 invert">
          </div>

          <div class="flex-1">
            <h3 class="text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#B07E09]">Loop Check</h3>
            <p class="text-sm font-semibold text-[#B07E09] mb-3 tracking-wider">VERIFICAÇÃO DE SINAIS</p>
            <p class="text-base leading-relaxed text-gray-700">É como uma "checagem de comunicação": testa todos os sinais entre instrumentos e sistemas de controle. Isso garante que alarmes, travas de segurança e paradas automáticas funcionem no momento certo.</p>
          </div>

          <a href="/services#loop-check" class="bg-[#B07E09] text-white rounded-full py-3 px-8 self-start font-semibold transition-all duration-300 hover:bg-[#8B6007] hover:px-10 flex items-center gap-2 group/btn">
            Saiba Mais
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" class="transition-transform duration-300 group-hover/btn:translate-x-1">
              <path d="M1 1L5 5.5L1 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#B07E09]/10 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-[#B07E09]/20"></div>
        </div>

        <!-- Card 4: Pré-Comissionamento -->
        <div
          class="relative bg-gradient-to-br from-[#FFF4D6] to-[#FFE19A] text-[#1A1201] rounded-2xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A1201]/30 hover:-translate-y-3 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
          style="transition-delay: 300ms"
        >
          <div class="w-20 h-20 bg-[#B07E09] rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 self-start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-full h-full text-white">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
          </div>

          <div class="flex-1">
            <h3 class="text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#B07E09]">Pré-Comissionamento</h3>
            <p class="text-sm font-semibold text-[#B07E09] mb-3 tracking-wider">PREPARAÇÃO E INSPEÇÃO</p>
            <p class="text-base leading-relaxed text-gray-700">Uma etapa de preparação antes de ligar a planta. Inclui inspeções em campo, registro de pendências (punch list) e testes a frio, para evitar surpresas no start-up.</p>
          </div>

          <a href="/services#pre-comissionamento" class="bg-[#B07E09] text-white rounded-full py-3 px-8 self-start font-semibold transition-all duration-300 hover:bg-[#8B6007] hover:px-10 flex items-center gap-2 group/btn">
            Saiba Mais
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" class="transition-transform duration-300 group-hover/btn:translate-x-1">
              <path d="M1 1L5 5.5L1 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#B07E09]/10 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-[#B07E09]/20"></div>
        </div>

        <!-- Card 5: Start-up -->
        <div
          class="relative bg-gradient-to-br from-[#FFF4D6] to-[#FFE19A] text-[#1A1201] rounded-2xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A1201]/30 hover:-translate-y-3 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
          style="transition-delay: 400ms"
        >
          <div class="w-20 h-20 bg-[#B07E09] rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 self-start">
            <img src="/svg/start-up.svg" alt="Start-up" class="w-full h-full object-contain brightness-0 invert">
          </div>

          <div class="flex-1">
            <h3 class="text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#B07E09]">Comissionamento</h3>
            <p class="text-sm font-semibold text-[#B07E09] mb-3 tracking-wider">START-UP DA PLANTA</p>
            <p class="text-base leading-relaxed text-gray-700">Aqui é onde a planta realmente ganha vida. São feitos testes funcionais e validações de segurança, acompanhando a partida até que tudo esteja estável e seguro para operação.</p>
          </div>

          <a href="/services#comissionamento" class="bg-[#B07E09] text-white rounded-full py-3 px-8 self-start font-semibold transition-all duration-300 hover:bg-[#8B6007] hover:px-10 flex items-center gap-2 group/btn">
            Saiba Mais
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" class="transition-transform duration-300 group-hover/btn:translate-x-1">
              <path d="M1 1L5 5.5L1 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#B07E09]/10 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-[#B07E09]/20"></div>
        </div>

        <!-- Card 6: Handover -->
        <div
          class="relative bg-gradient-to-br from-[#FFF4D6] to-[#FFE19A] text-[#1A1201] rounded-2xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A1201]/30 hover:-translate-y-3 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
          style="transition-delay: 500ms"
        >
          <div class="w-20 h-20 bg-[#B07E09] rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 self-start">
            <img src="/svg/doc-handover.svg" alt="Handover" class="w-full h-full object-contain brightness-0 invert">
          </div>

          <div class="flex-1">
            <h3 class="text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#B07E09]">Documentação</h3>
            <p class="text-sm font-semibold text-[#B07E09] mb-3 tracking-wider">HANDOVER & AS-BUILT</p>
            <p class="text-base leading-relaxed text-gray-700">Entrega final de relatórios, certificados e toda a documentação "as-built" (como foi realmente construído). Isso dá transparência e segurança para o cliente operar a planta.</p>
          </div>

          <a href="/services#handover" class="bg-[#B07E09] text-white rounded-full py-3 px-8 self-start font-semibold transition-all duration-300 hover:bg-[#8B6007] hover:px-10 flex items-center gap-2 group/btn">
            Saiba Mais
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" class="transition-transform duration-300 group-hover/btn:translate-x-1">
              <path d="M1 1L5 5.5L1 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#B07E09]/10 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-[#B07E09]/20"></div>
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